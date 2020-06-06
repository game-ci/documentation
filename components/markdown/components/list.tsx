interface ListProps {
  children: React.ReactNode;
  ordered?: boolean;
}

export const List = (props: ListProps) => {
  const { ordered, children } = props;

  if (ordered) {
    return <ol>{children}</ol>;
  }

  return <ul>{children}</ul>;
};

interface ItemProps {
  children: React.ReactNode;
  ordered?: boolean;
}

export const ListItem = (props: ItemProps) => {
  const { children } = props;

  return <li className="ant-typography">{children}</li>;
};
