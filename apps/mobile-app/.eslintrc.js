/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [
    "babel.config.js",
    "metro.config.js",
    "jest.config.js",
    "jest-setup.ts",
    "public/mockServiceWorker.js",
  ],
  extends: ["@template/eslint-config/base.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "dayjs",
            importNames: ["default"],
            message: "Please use dayjs from '@/utils/date' instead.",
          },
          {
            name: "@testing-library/react-native",
            message: "Please use '@/providers/test/library' instead.",
          },
        ],
      },
    ],
  },
};
