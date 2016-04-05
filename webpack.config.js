module.exports = {
    entry: "./public/js/client.js",
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: "./public/build/bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};