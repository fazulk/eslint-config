module.exports = {
  extends: [
    '@antfu',
  ],
  plugins: ['no-autofix'],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'unused-imports/no-unused-imports': 'off',
    'no-autofix/unused-imports/no-unused-imports': 'error',
  },
}
