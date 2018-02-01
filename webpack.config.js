const path = require('path');
const moduleProps = {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader:'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['es2015', 'es2015', 'react','stage-0']
                }
            }],
        },
        {
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader','less-loader']
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:[{
                loader:'file-loader',
            }]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use:[{
                loader:'file-loader',
            }]
        }
    ]
}

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: moduleProps
};