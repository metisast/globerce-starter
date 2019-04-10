const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('../webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                {from: './dist', to: '../public/dist'},
                {from: './src/images', to: '../public/images'},
            ]
        )
    ],
    resolve: {
    }
});
