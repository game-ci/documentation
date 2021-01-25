/* eslint-disable no-bitwise */

/**
 * Simple unique-enough hash function.
 *
 * Based on: https://stackoverflow.com/a/8831937
 */
export default (string) => {
  let hash = 0;
  if (string.length <= 0) {
    return hash;
  }
  for (let i = 0; i < string.length; i += 1) {
    const char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
};
