import React from 'react';
import PropTypes from 'prop-types';
import * as hljs from 'highlight.js/lib/core';

import { Button } from 'antd';

// Icon for Copy Button
import { GrCopy } from 'react-icons/all';

import { useNotification } from '@/core/hooks/use-notification';
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
    const { children, language } = this.props;

    // Add Styling to button here.
    // TODO decide if the button should be left or right aligned.
    const CopyButton = () => (
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Button
          onClick={() => {
            navigator.clipboard.writeText(children[0]);
            useNotification().info({
              message: 'Code Copied Successfully',
            });
          }}
        >
          <GrCopy />
        </Button>
      </div>
    );

    return (
      <>
        <pre className={styles.codeBlock}>
          <CopyButton />
          <div ref={this.setRef} className={`language-${language}`}>
            {children}
          </div>
        </pre>
      </>
    );
  }
}

CodeBlock.defaultProps = {
  language: '',
};

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
