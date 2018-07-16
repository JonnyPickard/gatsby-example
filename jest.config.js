module.exports = {
  rootDir: '.',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
