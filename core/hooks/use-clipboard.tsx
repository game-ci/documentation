export type OnSuccess = () => any;
export type OnError = (error: Error) => any;

export function useClipboard() {
  const write = async (text: string, onSuccess?: OnSuccess, onError?: OnError): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  return {
    write,
  };
}
