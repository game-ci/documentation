declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const source: string;
  export default source;
}

declare module '*.webp';
declare module '*.svg';
