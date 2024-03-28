const getUrlWithQueryStrings = (path: string, parameters: Record<string, string> = {}) => {
  const url = new URL(path);
  const queryStrings = new URLSearchParams([
    ...url.searchParams.entries(),
    ...Object.entries(parameters),
  ]);
  return `${url.origin}${url.pathname}?${queryStrings.toString()}`;
};

const getUrlWithUtmParameters = (path: string) => {
  const utmParameters = { utm_source: 'game-ci' };
  return getUrlWithQueryStrings(path, utmParameters);
};

export { getUrlWithUtmParameters };
