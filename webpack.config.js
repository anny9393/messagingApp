const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
    entry: { 
        main: './src/index.jsx',
    },
    output:  {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    resolve: { 
        extensions: [".js",".jsx"]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
              test: /\.js(x)?$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties" 
                  ]
                },
              },
            },
              {
                test: /\.css$/i,
                use: [
                  MiniCssExtractPlugin.loader, 'css-loader'],
                },
                  {
                    test: /\.module\.css$/i,
                    use: [
                      MiniCssExtractPlugin.loader, 
                      {
                        loader: 'css-loader',
                        options: {
                          modules: {
                            localIdentName:
                            '[path][name]__[local]--[hash:base64:5]' ,
                          },
                        },
                      },
                    ],
                  },
                  ],
              }, 
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: {
          index: 'index.html'
        },
      },
    plugins: [ new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html"
    }),
    new MiniCssExtractPlugin(),
    new GenerateSW(),
    ],
  };