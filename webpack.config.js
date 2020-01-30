const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const { PUBLIC_FOLDER } = require('./src/constants');

module.exports = (env, argv) => ({
    mode: (env && env.prod) ? 'production' : 'development',
    devtool: 'source-map',
    cache: false,
    entry: {
        app: './src/client/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, PUBLIC_FOLDER),
        filename: '[name].min.js'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }
        }]
    },
    optimization: {
        minimize: (env && env.prod)
    },
    plugins: [
        new CopyWebpackPlugin(
            (env && env.prod)
                ? [
                    { from: 'node_modules/react/umd/react.production.min.js', to: 'js/react.js' },
                    { from: 'node_modules/react-dom/umd/react-dom.production.min.js', to: 'js/react-dom.js' },
                    { from: 'node_modules/redux/dist/redux.min.js', to: 'js/redux.js' }
                ]
                : [
                    { from: 'node_modules/react/umd/react.development.js', to: 'js/react.js' },
                    { from: 'node_modules/react-dom/umd/react-dom.development.js', to: 'js/react-dom.js' },
                    { from: 'node_modules/redux/dist/redux.js', to: 'js/redux.js' }
                ]

        )
    ]
});
