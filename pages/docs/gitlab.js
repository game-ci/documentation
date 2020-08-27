import useRedirect from '../../core/routing/use-redirect';
import DocumentationLayout from '../../components/layout/documentation-layout';

const GitlabIndex = () => {
  useRedirect('/docs/gitlab/getting-started');

  return (
    <DocumentationLayout>
      <main className="ant-typography">Redirecting to category index...</main>
    </DocumentationLayout>
  );
};

export default GitlabIndex;
