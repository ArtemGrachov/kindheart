const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: 'bundle.css'
})

module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader', 'sass-loader'
                ])
            }]
        },
        plugins: [
            extractCSS
        ]
    }
}