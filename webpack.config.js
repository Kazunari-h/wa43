const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/js/index.js',

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/`,
    // 出力ファイル名
    filename: 'js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          {
            // CSSファイルを書き出すオプションを有効にする
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // CSSをバンドルする
            loader: 'css-loader',
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              importLoaders: 2,
            },
          },
          {
            // SCSSをバンドルする
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: "css/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "src/html/index.html",
      filename: "html/index.html"
    })
  ],
}
