import hash from './hash';

export default (objects: { [key: string]: any }[], keysToUse: string[]) => {
  return objects.map((object) => {
    let hashKey = '';
    for (const key of keysToUse) {
      const { [key]: partialKey } = object;

      if (partialKey === undefined) {
        throw new Error(
          `Expected property ${key} to exist on object.\n${JSON.stringify(object, undefined, 2)}`,
        );
      }

      hashKey += partialKey;
    }

    return { ...object, objectID: hash(hashKey) };
  });
};
