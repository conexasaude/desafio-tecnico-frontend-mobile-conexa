module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: '.',
        extensions: ['.ts', '.tsx'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@http-client': './src/http-client',
          '@models': './src/models',
          '@routes': './src/routes',
          '@schemas': './src/schemas',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
        },
      },
    ],
  ],
}
