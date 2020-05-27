module.exports = {
    //Настройка для фронтенда
    // "env": {
    //     "es6": true,
    //     "node": true
    // },
    // "extends": [
    //     "airbnb-base"
    // ],
    // "globals": {
    //     "Atomics": "readonly",
    //     "SharedArrayBuffer": "readonly"
    // },
    // "parserOptions": {
    //     "ecmaVersion": 2018
    // },
    // "rules": {
    //     'no-console': 'off',
    //     "no-underscore-dangle": 'off',
    // }


    //Настройка для бэкенда
    "extends": "airbnb-base",
    "rules": { "no-underscore-dangle": [2, { "allow": ["_id"] }] }
};