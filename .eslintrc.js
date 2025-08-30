module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 代码风格规则
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    // 变量和函数规则
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': 'warn',

    // 代码质量规则
    'prefer-const': 'error',
    'no-var': 'error',
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],

    // 异步规则
    'no-async-promise-executor': 'error',
    'require-await': 'warn',

    // 其他规则
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'comma-dangle': ['error', 'always-multiline'],
  },
  globals: {
    // 全局变量定义
    'process': 'readonly',
    'Buffer': 'readonly',
    '__dirname': 'readonly',
    '__filename': 'readonly',
  },
};
