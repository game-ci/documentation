import { useFunctions } from 'reactfire';

export function useHttpsCallable(name: string, data: { [key: string]: any }) {
  const functions = useFunctions();

  return async () => {
    try {
      return await functions.httpsCallable(name)(data);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  };
}
