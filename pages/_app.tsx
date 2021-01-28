/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
// import { IconContext } from 'react-icons';

// import 'antd/dist/antd.dark.css';
// import 'antd/dist/antd.less';
// import '../styles/vars.css';
// import '../styles/global.css';
// import '../styles/layout.css';
// import '../styles/markdown.css';
// import 'highlight.js/styles/dracula.css';

// import '../styles/home/header.less';
// import '../styles/home/home.less';
// import '../styles/home/footer.less';
// import '../styles/home/responsive.less';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
