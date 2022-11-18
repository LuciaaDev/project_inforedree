/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    "verbose": true,
    "testURL": "http://localhost/",
    globals: {
      "ts-jest": {
        "tsconfig": "./tsconfig.spec.json"
      }
    },
    "preset": "jest-preset-angular",
    "collectCoverage": true,
    "coverageDirectory": "./coverage",
    "collectCoverageFrom": [
      "src/app/**/*.ts",
    ],
    "coveragePathIgnorePatterns": [
      "main.ts",
      "polyfills.ts",
      "public_api.ts",
      ".module.ts",
      ".interface.ts",
      ".utils.ts",
      ".story.ts",
      ".mock.ts",
      ".module.ts"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/dist/",
      "<rootDir>/node_modules/",
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/jest-setup.ts"
    ],
    moduleFileExtensions: ['ts', 'js'],
    testResultsProcessor: "jest-sonar-reporter",
    globalSetup: 'jest-preset-angular/global-setup'
  };
  