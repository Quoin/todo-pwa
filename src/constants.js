/*
 *  File is used by webpack.config.js too
 */
const path = require('path');

module.exports = Object.freeze({
    CORDOVA_ROOT: path.join('src', 'cordova'),
    CORDOVA_WWW: 'www',
    PUBLIC_FOLDER: 'public',
    PUBLIC_PATH: '/public'
});
