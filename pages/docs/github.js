import useRedirect from '../../core/hooks/use-redirect';
import DocumentationLayout from '../../components/layout/documentation-layout';

const GithubIndex = () => {
  useRedirect('/docs/github/getting-started');

  return (
    <DocumentationLayout>
      <main className="ant-typography">Redirecting to category index...</main>
    </DocumentationLayout>
  );
};

export default GithubIndex;
