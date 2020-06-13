interface Props {
  children: React.ReactNode;
}

const LoadingText = ({ children }: Props) => <div style={{ padding: '0 24px' }}>{children}</div>;

export default LoadingText;
