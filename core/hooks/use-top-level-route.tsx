import { useRouter } from 'next/router';

export function useTopLevelRoute() {
  const { asPath } = useRouter();

  const parts = asPath.replace(/^\//, '').split('/');

  return `/${parts[0]}`;
}
