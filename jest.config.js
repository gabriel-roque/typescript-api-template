/* eslint-disable */

module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/config/api/$1',
    '^@providers/(.*)$': '<rootDir>/src/providers/$1',
  },
};
