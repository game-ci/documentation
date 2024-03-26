module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#3dc094',
          light: '#309976',
        },
        'brand-text': {
          dark: '#f0f2f5',
          light: '#373445',
        },
        background: {
          normal: {
            dark: '#373445',
            light: '#ffffff',
          },
          darker: {
            dark: '#32303f',
            light: '#ebeaec',
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
