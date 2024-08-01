/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "@testing-library/react-native",
  transformIgnorePatterns: ["node_modules/(?!|react-native-vector-icons)"],
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|\\.test)\\.(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/src/utils/jest-setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
