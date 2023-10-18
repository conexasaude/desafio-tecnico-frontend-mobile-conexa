module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@react-native-async-storage/async-storage$':
      '<rootDir>/src/__mocks__/async-storage.ts',
    '^@react-navigation/native$': '<rootDir>/src/__mocks__/navigation.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)',
    '/node_modules/(?!native-base)/',
  ],
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts'],
};
