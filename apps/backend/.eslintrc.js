/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
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
        ],
      },
    ],
  },
};
