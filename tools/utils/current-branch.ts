import getBranchName from 'current-git-branch';

export const currentBranch = () => process.env.VERCEL_GIT_COMMIT_REF || getBranchName();
