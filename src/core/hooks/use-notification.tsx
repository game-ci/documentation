import toast from 'react-hot-toast';

/**
 * Requires <Toaster /> to be included in the root of the app.
 */
export function useNotification() {
  const { success, error, loading, promise, dismiss, remove, custom } = toast;

  return {
    success,
    error,
    loading,
    promise,
    dismiss,
    remove,
    custom,
  };
}
