import React from 'react';

import { Row, Col } from 'antd';

// TODO: add some actual menu here
function FooterNavigation() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  GitHub
                </a>
              </div>
              <div>
                <a href="http://pro.ant.design">Ant Design Pro</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
              <div>
                <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                  <p>app.footer.awesome</p>
                </a>
              </div>
              <div>
                <a target="_blank " href="http://ant-design.gitee.io/">
                  <p>app.footer.chinamirror</p>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <p>app.footer.resources</p>
              </h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span> - </span>
                <p>app.footer.scaffolds</p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">
                  dva
                </a>
                <p>app.footer.dva</p>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/dvajs/dva-cli"
                >
                  dva-cli
                </a>
                <span>-</span>
                <p>app.footer.dev-tools</p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">
                  Ant Motion
                </a>
                <span> - </span>
                <p>app.footer.motion</p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">
                  AntD Library
                </a>
                <span> - </span>
                <p>app.footer.antd-library</p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">
                  Ant UX
                </a>
                <span> - </span>
                <p>app.footer.antux</p>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <p>app.footer.community</p>
              </h2>
              <div>
                <a href="/changelog">
                  <p>app.footer.change-log</p>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design/wiki/FAQ"
                >
                  <p>app.footer.faq</p>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design"
                >
                  <p>app.footer.discuss-cn</p>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design-english"
                >
                  <p>app.footer.discuss-en</p>
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://new-issue.ant.design/">
                  <p>app.footer.bug-report</p>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design/issues"
                >
                  <p>app.footer.issues</p>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://stackoverflow.com/questions/tagged/antd"
                >
                  <p>app.footer.stackoverflow</p>
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://segmentfault.com/t/antd">
                  <p>app.footer.segmentfault</p>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img
                  className="title-icon"
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt=""
                />
                <p>app.footer.more-product</p>
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">
                  AntV
                </a>
                <span> - </span>
                <p>app.footer.data-vis</p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">
                  Egg
                </a>
                <span> - </span>
                <p>app.footer.eggjs</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default FooterNavigation;
