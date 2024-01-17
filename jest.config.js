const transformIgnoreModules = [
  '@react-native/polyfills',
  '@react-native',
  'react-native',
  'react-native-event-listeners',
  'react-navigation',
  '@react-navigation/.*',
  'src/lib/*',
];

module.exports = {
  projects: [
    {
      name: 'react',
      preset: 'react-native',
      setupFiles: ['<rootDir>/jest.setup.js'],
      transformIgnorePatterns: [
        `node_modules/(?!(${transformIgnoreModules.join('|')})/)`,
      ],
      collectCoverageFrom: ['src/lib/*'],
      coveragePathIgnorePatterns: [
        '<rootDir>/src/lib/*',
        'src/Constant',
        'src/context',
        'src/navigator/*',
      ],
    },
  ],
};
