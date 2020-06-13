import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRedirect = (path, asUrl, options) => {
  const router = useRouter();

  useEffect(() => {
    if (path.startsWith('http')) {
      window.location.href = path;
    } else {
      router.push(path, asUrl, options);
    }
  });
};

export default useRedirect;
