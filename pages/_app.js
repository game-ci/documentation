import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
