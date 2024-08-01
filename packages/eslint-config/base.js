const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "eslint-config-turbo",
  ],
  plugins: [
    "@typescript-eslint",
    "only-warn",
    "simple-import-sort",
    "sort-keys-fix",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "sort-keys-fix/sort-keys-fix": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          /*
          Order:
            - Packages `react` related packages.
            - Internal packages.
            - Side effect imports.
            - Parent imports. Put `..` last.
            - Other relative imports. Put same-folder imports and `.` last.
            - Style imports.
          */
          [
            "^react",
            "^@?\\w",
            "^(@|components)(/.*|$)",
            "^\\u0000",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
            "^.+\\.?(css)$",
          ],
        ],
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
};
