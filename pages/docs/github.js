import useRedirect from '@/core/routing/use-redirect';
import DocumentationPage from '@/components/layout/documentation-page';

const GithubIndex = () => {
  useRedirect('/docs/github/getting-started');

  return (
    <DocumentationPage>
      <main className="ant-typography">Redirecting to category index...</main>
    </DocumentationPage>
  );
};

export default GithubIndex;
