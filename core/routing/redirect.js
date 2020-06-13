export default function redirect(context, url) {
  const { res } = context;
  if (res) {
    res.writeHead(307, { Location: url });

    res.end();
  }

  return {};
}
