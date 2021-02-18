export const capitalizeFirstLetter = ([first, ...rest], locale = 'en') => {
  try {
    return first.toLocaleUpperCase(locale) + rest.join('');
  } catch {
    return first.toLocaleUpperCase(locale) + rest;
  }
};

export const replaceAll = (input, searchValue: string, replaceValue: string) => {
  return input.split(searchValue).join(replaceValue);
};

export const normaliseTitle = (rawFileName) => {
  const fileName = replaceAll(rawFileName, '-', ' ');

  // For now this is the only exception, this could be made smarter later
  if (fileName === 'ios') {
    return 'iOS';
  }

  return capitalizeFirstLetter(fileName);
};
