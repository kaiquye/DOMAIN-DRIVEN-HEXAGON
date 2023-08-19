module.exports = {
    parser: '@babel/eslint-parser', // Use Babel parser to handle React features
    extends: ['eslint:recommended', 'plugin:react/recommended'], // Use recommended configurations, including React

    plugins: ['react'], // Add the React plugin
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
    },

    rules: {
        // Customizing rules:
        indent: ['error', 2], // Enforce 2 spaces for indentation
        quotes: ['error', 'single'], // Use single quotes for strings
        semi: ['error', 'always'], // Require semicolons at the end of statements
        'no-unused-vars': 'warn', // Warn about unused variables
        'react/jsx-uses-react': 'off', // Avoid React detection in JSX since it's unnecessary with newer versions
        'react/prop-types': 'off', // Disable prop-types validation (you might want to enable this for production)
        'react/react-in-jsx-scope': 'off', // Avoid the "React is defined but never used" warning
    },
}
