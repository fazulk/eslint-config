module.exports = {
  extends: [
    '@antfu',
  ],
  plugins: [

  ],
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
    'vue/custom-event-name-casing': ['error',
      'kebab-case',
      {
        ignores: [],
      },
    ],    
  },
}
