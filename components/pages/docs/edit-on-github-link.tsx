import { PageContext } from '@/components/context/page-context';
import { Button } from 'antd';
import { AiOutlineGithub } from 'react-icons/all';
import { useContext } from 'react';

const EditOnGithubLink = () => {
  const { absolutePath } = useContext(PageContext);

  const repoPath = 'https://github.com/game-ci/documentation';
  const editPath = 'edit/main';
  const filePath = `docs/${absolutePath}`;

  const href = absolutePath ? `${repoPath}/${editPath}/${filePath}` : `${repoPath}`;

  return (
    <Button type="primary" icon={<AiOutlineGithub />} href={href}>
      Edit on GitHub
    </Button>
  );
};

export default EditOnGithubLink;
