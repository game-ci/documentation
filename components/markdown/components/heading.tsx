import { Typography } from 'antd';

const { Title } = Typography;

interface Props {
  level: number;
  children: React.ReactNode;
}

export default ({ level, children }: Props) => {
  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
      return <Title level={level}>{children}</Title>;
    case 5:
      return <strong style={{ fontSize: '130%', display: 'block' }}>{children}</strong>;
    case 6:
      return <strong style={{ fontSize: '110%', display: 'block' }}>{children}</strong>;
    default:
      return <strong style={{ display: 'block' }}>{children}</strong>;
  }
};
