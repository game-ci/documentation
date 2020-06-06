interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <article className="markdown ant-typography">{children}</article>
);
