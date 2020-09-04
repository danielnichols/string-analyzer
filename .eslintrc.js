module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': 'warn',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
};
