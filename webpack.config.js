const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist"),
        },
    },
    plugins: [new htmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    }
};