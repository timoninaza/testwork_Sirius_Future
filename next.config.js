const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      }
    );
    return config;
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ["es-us", "ru"],
    }),
  ],
};
