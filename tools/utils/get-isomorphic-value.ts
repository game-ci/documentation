import getConfig from 'next/config';

/**
 * Returns an environment variable that is set during build time,
 * both on the server and in the browser.
 *
 * For a variable to show up in the browser, it needs to be defined in next.config.js under
 * the property `publicRuntimeConfig`.
 *
 * Notes:
 *   - This is a low level method, that should only be used in specific cases where the store has
 *     not yet been initialised, but the value is still required.
 *   - An empty string is only expected if this function is executed in the code path of a custom
 *     script outside of NextJS, thus not using next.config.js configuration.
 */
export const getIsomorphicValue = (variableName: string): string => {
  const config = getConfig();

  return config ? config.publicRuntimeConfig[variableName] : '';
};
