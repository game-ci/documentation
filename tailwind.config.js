module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#3dc094',
          light: '#2b896a',
        },
        secondary: {
          dark: '#373445',
          light: '#e9e0ff',
        },
        'brand-text': {
          dark: '#f0f2f5',
          light: '#373445',
        },
        'brand-background': {
          dark: '#23212b',
          light: '#f0f2f5',
        },
        background: {
          normal: {
            dark: '#373445',
            light: '#ffffff',
          },
          darker: {
            dark: '#32303f',
            light: '#f2f2f2',
          },
          highlight: {
            dark: '#363344',
            light: '#ffffff',
          },
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  darkMode: ['selector', '[data-theme="dark"]'],
};
