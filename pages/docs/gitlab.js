import useRedirect from '@/core/routing/use-redirect';
import Page from '@/components/layout/docs/page';

const GitlabIndex = () => {
  useRedirect('/docs/gitlab/getting-started');

  return (
    <Page>
      <main className="ant-typography">Redirecting to category index...</main>
    </Page>
  );
};

export default GitlabIndex;
