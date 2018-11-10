module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',

  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html'],
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|ngx-lorem-ipsum)"
  ],
  "moduleNameMapper": {
    "^src/(.*)": "<rootDir>/src/$1",
    "^app/(.*)": "<rootDir>/src/app/$1",
    "^assets/(.*)": "<rootDir>/src/assets/$1",
    "^environments/(.*)": "<rootDir>/src/environments/$1"
  },
};
