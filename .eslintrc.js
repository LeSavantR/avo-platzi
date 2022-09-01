const RULES = {
  OFF: 'off',
  WARN: 'warn',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeature: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'react/jsx-filename-extension': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'react/jsx-one-expression-per-line': RULES.OFF,
  },
};
