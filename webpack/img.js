module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.(jpe?g|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/img/'
                }
            }]
        }
    }
}