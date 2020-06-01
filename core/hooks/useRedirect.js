import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useRedirect = (path) => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      router.push(path);
    }
  });
};
