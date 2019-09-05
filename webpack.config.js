const webpack = require('webpack');

module.exports = {
    output: {
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|build)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                }
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
    ]
};
