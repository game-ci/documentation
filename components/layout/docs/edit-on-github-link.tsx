import { PageContext } from '@/components/context/page-context';
import { GithubOutlined } from '@ant-design/icons';
import { useContext } from 'react';

const EditOnGithubLink = () => {
  const { absolutePath } = useContext(PageContext);

  const repoPath = 'https://github.com/game-ci/documentation';
  const editPath = 'edit/main';
  const filePath = `docs/${absolutePath}`;

  const href = absolutePath ? `${repoPath}/${editPath}/${filePath}` : `${repoPath}`;

  return (
    <a href={href} type="link">
      <GithubOutlined />
      <span style={{ paddingLeft: 8 }}>Edit on GitHub</span>
    </a>
  );
};

export default EditOnGithubLink;
