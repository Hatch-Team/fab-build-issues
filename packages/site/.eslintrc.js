module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: ["../../.eslintrc.react.js"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    "jsx-a11y/anchor-is-valid": "off", // next depends on <a> being a child of Link
    "react/react-in-jsx-scope": "off"
  },
  ignorePatterns:["**/next.config.js", "**/.eslintrc.js"]
};
