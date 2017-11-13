module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.otf$/,
                loader: 'file-loader',
                options: {
                    outputPath: './assets/fonts/',
                    name: '[name].[ext]'
                }
            }]
        }
    }
}