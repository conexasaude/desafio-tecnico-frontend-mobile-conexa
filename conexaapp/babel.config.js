module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['inline-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@components': './src/components',
          '@infra': './src/infra',
          '@hooks': './src/hooks',
          '@contexts': './src/contexts',
          '@routes': './src/routes',
          '@theme': './src/theme',
          '@interfaces': './src/interfaces',
          '@dtos': './src/dtos',
          '@mappers': './src/mappers',
          '@models': './src/models',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
