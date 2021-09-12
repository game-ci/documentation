const extractTitle = (line) => {
  if (!line) {
    // eslint-disable-next-line no-console
    console.log('\u001B[33m%s\u001B[0m  - %s', 'warn', 'Unable to extract title from', line);
    return '';
  }

  if (typeof line !== 'string') {
    // eslint-disable-next-line no-console
    console.error(
      `Expected heading to consist of a string. That way we can easily use them as anchors.
      The following does not adhere to this rule: "${JSON.stringify(line, null, 2)}"`,
    );
  }

  return line.replace(/^[\s#]*/, '').trim();
};

export const extractAnchorId = (line) => {
  return extractTitle(line).toLowerCase().split(' ').join('-');
};
