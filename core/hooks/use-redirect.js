import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRedirect = (path, asUrl, options) => {
  const router = useRouter();

  useEffect(() => {
    router.push(path, asUrl, options);
  });
};

export default useRedirect;
