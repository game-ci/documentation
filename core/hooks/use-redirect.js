import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRedirect = (path) => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      router.push(path);
    }
  });
};

export default useRedirect;
