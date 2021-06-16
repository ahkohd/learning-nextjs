module.exports = {
    jest: true,
    extends: ['plugin:react/recommended', 'plugin:next/eslint-plugin-next'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        semi: ['error', 'never'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['*.d.ts', 'webpack.config.js'],
}
