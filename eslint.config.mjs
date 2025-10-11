import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: { jest: pluginJest },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  pluginJs.configs.recommended,
  prettierConfig,
];
