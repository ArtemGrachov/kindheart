module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.pug$/,
                use: [
                    'file-loader?name=[name].html',
                    'extract-loader',
                    'html-loader',
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            }]
        }
    }
}