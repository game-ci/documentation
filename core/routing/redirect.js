export default function redirect(context, path) {
  const { res } = context;
  if (res) {
    res.writeHead(307, { Location: path });
    res.end();
  }
}
