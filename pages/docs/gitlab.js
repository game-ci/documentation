import useRedirect from '@/core/routing/use-redirect';
import DocumentationPage from '@/components/layout/documentation-page';

const GitlabIndex = () => {
  useRedirect('/docs/gitlab/getting-started');

  return (
    <DocumentationPage>
      <main className="ant-typography">Redirecting to category index...</main>
    </DocumentationPage>
  );
};

export default GitlabIndex;
