export default function redirect(ctx, path) {
  const { res } = ctx;
  if (res) {
    res.writeHead(307, { Location: path });
    res.end();
  }
}
