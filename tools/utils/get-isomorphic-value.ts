import getConfig from 'next/config';

/**
 * Returns an environment variable that is set during build time,
 * both on the server and in the browser.
 *
 * For a variable to show up in the browser, it needs to be defined in next.config.js under
 * the property `publicRuntimeConfig`.
 *
 * Note: This is a low level method, that should only be used in specific cases where the store has
 * not yet been initialised, but the value is still required.
 */
export function getIsomorphicValue(variableName) {
  const { publicRuntimeConfig } = getConfig();

  return publicRuntimeConfig[variableName];
}
