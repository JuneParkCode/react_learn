module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      "indent":[
        "error",
        4
    ],
    "no-unused-vars": 1,
    "no-use-before-define": 1,
    "no-redeclare": 1,
    "no-console":0,
  },
};
