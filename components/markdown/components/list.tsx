interface ListProps {
  children: React.ReactNode;
  ordered?: boolean;
}

const List = (props: ListProps) => {
  const { ordered, children } = props;

  if (ordered) {
    return <ol>{children}</ol>;
  }

  return <ul>{children}</ul>;
};

List.defaultProps = {
  ordered: false,
};

interface ItemProps {
  children: React.ReactNode;
}

const ListItem = (props: ItemProps) => {
  const { children } = props;

  return <li className="ant-typography">{children}</li>;
};

export { List, ListItem };
