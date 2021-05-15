import React from 'react';
import PropTypes from 'prop-types';
import * as hljs from 'highlight.js/lib/core';

import styles from './markdown-components.module.scss';

hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
hljs.registerLanguage('csharp', require('highlight.js/lib/languages/csharp'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
hljs.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'));

class CodeBlock extends React.PureComponent {
  constructor(properties) {
    super(properties);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setRef(element) {
    this.codeEl = element;
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    const { value, language } = this.props;
    return (
      <pre className={styles.codeBlock}>
        <div ref={this.setRef} className={`language-${language}`}>
          {value}
        </div>
      </pre>
    );
  }
}

CodeBlock.defaultProps = {
  language: '',
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
