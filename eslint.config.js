import js from "@eslint/js"
import pluginImport from "eslint-plugin-import"
import pluginPromise from "eslint-plugin-promise"

export default [
  js.configs.recommended,
  {
    plugins: { import: pluginImport, promise: pluginPromise },
    rules: {
      "no-console": "warn",
      "promise/always-return": "off"
    }
  }
]
