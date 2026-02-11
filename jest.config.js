module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['node_modules/(?!@babel/runtime)'],
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  moduleNameMapper: {
    '@site/(.*)': '<rootDir>/$1',
    '\\.(css|scss)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(svg|png|webp)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
};
