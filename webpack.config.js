const path = require('path');

var sourceDir = path.join(__dirname, 'src');
var targetDir = path.join(__dirname, 'public', 'js');

module.exports = {
    entry: {
        app: path.join(sourceDir, 'app.tsx'),
    },
    output: {
        path: targetDir,
        filename: '[name].js',
        publicPath: 'js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: 'public',
    },
};