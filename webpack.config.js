'use strict';
const path = require('path'),
    merge = require('webpack-merge'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin').default,
    css = require('./webpack/css'),
    babel = require('./webpack/babel'),
    pug = require('./webpack/pug'),
    img = require('./webpack/img'),
    fonts = require('./webpack/fonts'),
    server = require('./webpack/server');


const PATHS = {
    app: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'dist')
}

const common = merge([{
            context: PATHS.app,
            entry: './js/main.js',
            output: {
                path: PATHS.dist,
                filename: 'bundle.js'
            },
            plugins: [
                new CleanWebpackPlugin(['dist']),
                new ImageminPlugin()
            ]
        },
        babel(),
        fonts(),
        pug(),
        img()
    ]),
    uglify = {
        plugins: [
            new UglifyJSPlugin()
        ]
    };

module.exports = function (env) {
    switch (env) {
        case 'dev':
            return merge([
                common,
                css().dev,
                server()
            ])
            break;
        case 'build':
            return merge([
                common,
                css().dev,
            ])
            break;
        case 'prod':
            return merge([
                common,
                css().min,
                uglify
            ])
            break;
    }
}