module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  parser: '@typescript-eslint/parser',
  settings: { react: { version: '18.2' } },
  plugins: ['@typescript-eslint', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
