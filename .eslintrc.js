module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['@react-native-community', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  env: {
    jest: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        '~/components': './app/components',
        '~/constants': './app/constants',
        '~/navigation': './app/navigation',
        '~/screens': './app/screens',
        '~/styles': './app/styles',
        '~/types': './app/types',
        '~/utils': './app/utils',
      },
      flowtype: {
        onlyFilesWithFlowAnnotation: true,
      },
    },
    node: true,
  },
  rules: {
    'flowtype/no-weak-types': [
      2,
      {
        any: false,
        Object: false,
        Function: false,
      },
    ],
  },
};
