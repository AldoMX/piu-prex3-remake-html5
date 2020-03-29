module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};