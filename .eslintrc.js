module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        'accessor-pairs': OFF,
        'brace-style': [ERROR, '1tbs'],
        'consistent-return': OFF,
        'dot-location': [ERROR, 'property'],
        'dot-notation': ERROR,
        'eol-last': ERROR,
        eqeqeq: [ERROR, 'allow-null'],
        indent: OFF,
        'jsx-quotes': [ERROR, 'prefer-single'],
        'keyword-spacing': [ERROR, { after: true, before: true }],
        'no-bitwise': OFF,
        'no-inner-declarations': [ERROR, 'functions'],
        'no-multi-spaces': ERROR,
        'no-restricted-syntax': [ERROR, 'WithStatement'],
        'no-unused-expressions': ERROR,
        'no-unused-vars': [ERROR, { args: 'none' }],
        'no-use-before-define': [ERROR, { functions: false, variables: false }],
        'no-useless-concat': OFF,
        quotes: [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'space-before-blocks': ERROR,
        'space-before-function-paren': OFF,
        'valid-typeof': [ERROR, { requireStringLiterals: true }],
        'no-console': [ERROR, { allow: ['info'] }],
        'import/order': [
          WARN,
          {
            groups: ['builtin', 'external', 'unknown', [('parent', 'sibling', 'index')]],
            'newlines-between': 'always',
          },
        ],
};