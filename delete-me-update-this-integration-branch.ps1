# delete-me-update-this-integration-branch.ps1
# Run this script from the repo root while on the release/next-gen branch.
# It merges the latest from each component branch to keep this integration branch current.
# After running, review any conflicts, then commit and push.

$ErrorActionPreference = 'Stop'

$branchName = git rev-parse --abbrev-ref HEAD
if ($branchName -ne 'release/next-gen') {
    Write-Error "Must be on release/next-gen branch. Currently on: $branchName"
    exit 1
}

# Component branches for this integration branch (next-gen documentation PRs)
$branches = @(
    'docs/test-workflow-hot-runners'   # #538 - next-gen features and advanced topics
    'docs/cli-support'                 # #540 - game-ci CLI documentation
)

Write-Host "Fetching latest from origin..." -ForegroundColor Cyan
git fetch origin

$failed = @()
foreach ($branch in $branches) {
    $remoteBranch = "origin/$branch"
    # Check if remote branch exists
    $refExists = git rev-parse --verify $remoteBranch 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  Skipping $branch (not found on remote)" -ForegroundColor DarkGray
        continue
    }

    # Check if already merged
    $mergeBase = git merge-base HEAD $remoteBranch 2>$null
    $remoteHead = git rev-parse $remoteBranch 2>$null
    if ($mergeBase -eq $remoteHead) {
        Write-Host "  $branch - already up to date" -ForegroundColor DarkGray
        continue
    }

    Write-Host "`nMerging origin/$branch..." -ForegroundColor Yellow
    $result = git merge "origin/$branch" --no-edit 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  CONFLICT merging $branch - resolve manually" -ForegroundColor Red
        $failed += $branch
        # Abort this merge so we can continue with others
        git merge --abort
    } else {
        Write-Host "  Merged successfully" -ForegroundColor Green
    }
}

if ($failed.Count -gt 0) {
    Write-Host "`nThe following branches had conflicts and were skipped:" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    Write-Host "`nRe-run after resolving, or merge them manually:" -ForegroundColor Yellow
    $failed | ForEach-Object { Write-Host "  git merge origin/$_" -ForegroundColor Yellow }
} else {
    Write-Host "`nAll branches merged successfully!" -ForegroundColor Green
    Write-Host "Run 'git push origin release/next-gen' to update the remote." -ForegroundColor Cyan
}
