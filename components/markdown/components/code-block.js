import React from 'react';
import PropTypes from 'prop-types';
import * as hljs from 'highlight.js/lib/core';

import { Button } from 'antd';

// Icon for Copy Button
import { GrCopy } from 'react-icons/all';

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
    this.setViewRef = this.setViewRef.bind(this);
    this.state = {
      didCopyCode: false,
    };
  }

  componentDidMount() {
    this.highlightCode();
    document.addEventListener('scroll', this.isInViewport);
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.isInViewport);
  }

  setRef(element) {
    this.codeEl = element;
  }

  setViewRef(element) {
    this.viewElement = element;
  }

  // Checking if the codeblock is present in viewport.
  // Based on that setting the copy button or text
  isInViewport = () => {
    const { top } = this.viewElement ? this.viewElement.getBoundingClientRect() : { top: -1000 };
    const { bottom } = this.viewElement
      ? this.viewElement.getBoundingClientRect()
      : { bottom: -1000 };
    if (bottom < 0 || top >= window.innerHeight) {
      this.setState({
        didCopyCode: false,
      });
    }
  };

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    const { children, language } = this.props;
    const { didCopyCode } = this.state;

    // Add Styling to button here.
    const CopyButton = () => (
      <Button
        onClick={() => {
          this.setState({
            didCopyCode: true,
          });
          navigator.clipboard.writeText(children[0]);
        }}
      >
        <GrCopy />
      </Button>
    );

    return (
      <div ref={this.setViewRef}>
        <div>{didCopyCode ? 'Code Copied Sucessfully' : <CopyButton />}</div>
        <pre className={styles.codeBlock}>
          <div ref={this.setRef} className={`language-${language}`}>
            {children}
          </div>
        </pre>
      </div>
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
