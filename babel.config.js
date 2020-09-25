module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~/components': './app/components',
          '~/constants': './app/constants',
          '~/navigation': './app/navigation',
          '~/screens': './app/screens',
          '~/styles': './app/styles',
          '~/types': './app/types',
          '~/utils': './app/utils',
        },
      },
    ],
  ],
};
