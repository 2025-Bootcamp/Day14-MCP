import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2022,
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
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
  },
  {
    ignores: [
      // Dependencies
      'node_modules/',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',

      // Build outputs
      'dist/',
      'build/',
      '*.min.js',

      // Environment files
      '.env*',

      // IDE files
      '.vscode/',
      '.idea/',
      '*.swp',
      '*.swo',

      // OS generated files
      '.DS_Store',
      '.DS_Store?',
      '._*',
      '.Spotlight-V100',
      '.Trashes',
      'ehthumbs.db',
      'Thumbs.db',

      // Logs
      'logs/',
      '*.log',

      // Coverage directory
      'coverage/',
      '*.lcov',

      // Temporary folders
      'tmp/',
      'temp/',
    ],
  },
];
