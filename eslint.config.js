import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import plugin from "@typescript-eslint/eslint-plugin";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: ["node_modules/**", "dist/**", "public/**", ".git/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: path.join(rootDir, "tsconfig.json"),
        tsconfigRootDir: rootDir,
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": plugin,
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
