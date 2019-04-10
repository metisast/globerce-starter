const merge = require('webpack-merge');
const common = require('../webpack.common');
const MinifyPlugin = require("babel-minify-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
        ]
    },
    plugins: [
        new MinifyPlugin(),
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })
    ],
    resolve: {
    }
})
