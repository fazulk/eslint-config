const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS)
  console.warn('[@fazulk/eslint-config] TypeScript is not installed, fallback to JS only.')

module.exports = {
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        ...(TS
          ? { '@typescript-eslint/no-unused-vars': 'off' }
          : null),
      },
    },
  ],
  extends: [
    'plugin:svelte/recommended',
    TS
      ? '@fazulk/eslint-config-ts'
      : '@fazulk/eslint-config-basic',
  ],
  rules: {
    'svelte/indent': [
      'error',
      {
        indentScript: false,
      },
    ],
  },
}
