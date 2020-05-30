import { useRouter } from 'next/router';

export const usePathSegments = (nameOfRootSegment = null)  => {
  const { asPath } = useRouter();
  const segments = asPath.slice(1).split('#')[0].split('/');

  let url = ''
  const pathSegments = segments.map(segment => {
    url += `/${segment}`;
    const name = segment.replace('-', ' ')

    return { url, name }
  });

  if (nameOfRootSegment != null) {
    pathSegments.unshift({ url: '/', name: nameOfRootSegment });
  }

  return pathSegments;
};
