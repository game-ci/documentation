import { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/layout.css';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
