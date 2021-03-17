interface Props {
  children: React.ReactNode;
}

const Article = ({ children }: Props) => (
  <article className="markdown ant-typography">{children}</article>
);

export default Article;
