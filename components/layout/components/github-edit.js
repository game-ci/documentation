import PropTypes from 'prop-types';
import { GithubOutlined } from '@ant-design/icons';

const propTypes = {
  query: PropTypes.objectOf(PropTypes.object()).isRequired,
};

const GithubEdit = ({ query }) => {
  const [cat, slug] = query['documentation-page'];
  return (
    <div style={{ marginLeft: 'auto' }}>
      <GithubOutlined style={{ color: '#1890ff' }} />
      <a
        href={`https://github.com/Unity-CI/Website/edit/main/docs/${cat}/${slug}.md`}
        style={{
          padding: '0 0 0 8px',
          color: '#1890ff',
          fontSize: '16px',
        }}
        type="link"
      >
        Edit on GitHub
      </a>
    </div>
  );
};

GithubEdit.propTypes = propTypes;
export default GithubEdit;
