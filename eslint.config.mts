import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

// Export the array returned by withVueTs directly
export default withVueTs(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
    ],
  },

  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'comma-dangle': ['error', {
        arrays: 'always',
        objects: 'always',
        exports: 'never',
        functions: 'never',
        imports: 'never',
      },],

      'eol-last': ['error', 'always',],

      'max-len': ['error', {
        code: 125,
        comments: 125,
      },],

      'no-multiple-empty-lines': ['error', {
        max: 1,
        maxEOF: 0,
      },],

      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['warn', 'always',],
      quotes: ['error', 'single',],
      semi: ['error', 'never',],
    },
  }
)
