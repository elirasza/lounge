import { resolve } from 'path'

export default {
  devtool: 'inline-source-map',
  entry: './app/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.node/i,
        use: [
          {
            loader: 'node-loader',
            options: {
              name: 'extensions/[name].[contenthash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|webp|ico|svg|mp3|aac|ogg|oga|mp4|m4a|wav|avi|webm|ttf|otf|eot|woff|woff2|css|less|sass|scss)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[contenthash].[ext]'
            },
          },
        ],
      },
    ],
  },
  output: {
    path: resolve('./out'),
  },
  performance: {
    maxAssetSize: 100 * 1024 * 1024,
    maxEntrypointSize: 100 * 1024 * 1024,
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
  },
  target: 'node'
}
