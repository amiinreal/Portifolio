// import { nextCoreWebVitals } from "next/core-web-vitals";

import unusedImports from "eslint-plugin-unused-imports";

export default [
  // nextCoreWebVitals,
  {
    plugins: {
      "unused-imports": unusedImports
    },
    rules: {
      "unused-imports/no-unused-imports": "error"
    }
  }
]; 