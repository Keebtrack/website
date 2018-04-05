const path = require('path');
const webpack = require('webpack');
// const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const staticSourcePath = path.join(__dirname, 'static');
const sourcePath = path.join(__dirname, 'src');
const stylesPath = path.join(__dirname, 'styles');
const buildPath = path.join(__dirname, 'dist');

// do a simple check to see if we are running in production
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  watch: !isProduction,
  devtool: 'cheap-module-source-map',
  entry: {
    styles: path.resolve(stylesPath, 'bootstrap.scss'),
    app: isProduction ? [path.resolve(sourcePath, 'index.js')] : ['babel-polyfill', 'react-hot-loader/patch', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? '[name].[chunkhash].js' : '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      sourcePath,
      path.resolve(__dirname, 'node_modules')
    ],
    alias: {
      '@components': path.resolve(sourcePath, 'components'),
      '@images': path.resolve(staticSourcePath, 'images'),
      '@pages': path.resolve(sourcePath, 'pages'),
      '@helpers': path.resolve(sourcePath, 'helpers')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    hot: true,
    inline: true,
    open: true
  },
  plugins: [
      new CleanWebpackPlugin(buildPath),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isProduction ? JSON.stringify('production') : JSON.stringify('development'),
        API_URL: isProduction ? JSON.stringify('https://api.keebtrack.com/graphql') : JSON.stringify('http://localhost:9094/graphql')
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: isProduction ? 'vendor.[chunkhash].js' : 'vendor.[hash].js',
        minChunks(module) {
          return module.context && module.context.indexOf('node_modules') >= 0;
        }
      }),
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(staticSourcePath, 'index.html'),
        path: buildPath,
        excludeChunks: ['base'],
        filename: 'index.html',
        minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true
        }
      }),
      new PreloadWebpackPlugin({
        rel: 'preload',
        as: 'script',
        allChunks: true,
        fileBlacklist: [/\.(css|map)$/, /base?.+/]
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
      new ExtractTextPlugin({
        filename: '[name].css'
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
    // add plugins based on environment
    .concat(isProduction ? [
      // new PurifyCSSPlugin({
      //   paths: glob.sync(path.join(__dirname, 'src/*.js')),
      //   purifyOptions: { info: true, minify: false }
      // }),
      new StyleExtHtmlWebpackPlugin({
        minify: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      })
    ] : [
      new webpack.HotModuleReplacementPlugin()
    ]),
  module: {
    rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ],
          include: sourcePath
        },
        {
          test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
          use: 'file-loader?name=assets/[name]-[hash].[ext]'
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          use: [
            'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
          ],
          include: staticSourcePath
        }
      ]
      // in production the scss loading is different, for development we want HMR
      .concat(isProduction ? [{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true,
              }
            },
            'sass-loader'
          ]
        })
      }] : [{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: 'style-loader',
            options: {
              hmr: true
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }])
  }
};