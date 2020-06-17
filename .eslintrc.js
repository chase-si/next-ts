module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
  ],
  rules: {},
};
