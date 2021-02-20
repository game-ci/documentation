import getBranchName from 'current-git-branch';

/**
 * Note, Vercel variables have to be exposed manually or enabled to expose automatically.
 */
export const currentBranch = () => process.env.VERCEL_GIT_COMMIT_REF || getBranchName();
