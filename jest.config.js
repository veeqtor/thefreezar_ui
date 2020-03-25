module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  transform: {
    '\\.(ts|tsx)?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  testMatch: ['<rootDir>/src/**/?(*.)(test|spec).{ts,tsx}'], // looks for your test
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // sets ut test files
  coverageDirectory: './coverage',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'text-summary'],
};
