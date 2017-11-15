const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: 'bundle.css'
})

module.exports = function(env) {
    const cssLoader = {
            loader: 'css-loader',
            options: {
                minimize: true
            }
        },
        sassLoader = {
            loader: 'sass-loader',
            options: {
                minimize: true
            }
        };

    return {
        min: {
            module: {
                rules: [{
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract([cssLoader])
                }, {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract([
                        cssLoader, sassLoader
                    ])
                }]
            },
            plugins: [
                extractCSS
            ]
        },
        dev: {
            module: {
                rules: [{
                    test: /\.css$/,
                    loader: (ExtractTextPlugin.extract(['css-loader']))
                }, {
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
}