import globals from "globals";
import js from "@eslint/js";
import tseslint from 'typescript-eslint';
import unusedImports from "eslint-plugin-unused-imports"
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        myCustomGlobal: "readonly"
      }
    },

  },
  {
    ignores: ["node_modules", "dist", ".angular"],
  },
  {
    plugins: {unusedImports: unusedImports},
  }

]
