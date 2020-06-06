/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/layout.css';
import '../styles/markdown.css';
import 'highlight.js/styles/dracula.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
