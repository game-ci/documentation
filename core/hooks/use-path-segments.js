import { useRouter } from 'next/router';

const usePathSegments = (nameOfRootSegment) => {
  const { asPath } = useRouter();
  const segments = asPath.slice(1).split('#')[0].split('/');

  let url = '';
  const pathSegments = segments.map((segment) => {
    url += `/${segment}`;
    const name = segment.replace('-', ' ');

    return { url, name };
  });

  if (nameOfRootSegment !== undefined) {
    pathSegments.unshift({ url: '/', name: nameOfRootSegment });
  }

  return pathSegments;
};

export default usePathSegments;
