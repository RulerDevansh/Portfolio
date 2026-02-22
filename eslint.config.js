import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  // react/recommended + jsx-runtime flat configs (include plugin + settings)
  {
    ...reactPlugin.configs.flat.recommended,
    settings: { react: { version: '18.2' } },
  },
  reactPlugin.configs.flat['jsx-runtime'],
  // react-hooks flat config
  reactHooks.configs['recommended-latest'],
  // Node.js config files (tailwind, vite, postcss)
  {
    files: ['*.config.js', '*.config.cjs', '*.config.mjs'],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
  // project-wide overrides
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      // react-refresh: project uses multi-component files + HOC wrappers by design
      'react-refresh/only-export-components': 'off',
      // prop-types not used in this project (no TypeScript + no PropTypes library)
      'react/prop-types': 'off',
      // Three.js / @react-three/fiber use custom JSX properties (position, args, etc.)
      'react/no-unknown-property': 'off',
      // Apostrophes in JSX text — safe to allow as-is
      'react/no-unescaped-entities': 'off',
    },
  },
];
