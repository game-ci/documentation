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
      return <h5 className="ant-typography">{children}</h5>;
    case 6:
    default:
      return <h6 className="ant-typography">{children}</h6>;
  }
};
