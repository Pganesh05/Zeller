module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@src': './src',
        },
      },
    ],
  ],
};
