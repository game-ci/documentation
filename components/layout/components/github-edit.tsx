import { GithubOutlined } from '@ant-design/icons';

interface GithubEditProps {
  href: string;
}

const GithubEdit = ({ href }: GithubEditProps) => {
  return (
    <a href={href} type="link">
      <GithubOutlined />
      <span style={{ paddingLeft: 8 }}>Edit on GitHub</span>
    </a>
  );
};

export default GithubEdit;
