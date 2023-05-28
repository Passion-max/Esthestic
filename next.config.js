const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack as an argument to the function
    // You can modify the config (first argument) directly and return it.
    
    // For example, to provide an empty object for 'fs' when it's required by modules:
    config.resolve.fallback = {
      net: false,
      fs: false,
      path: false,
      tls: false,
      // Other configurations go here
    };

    // Add css-loader to the rules array
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader']
    // },);

    return config;
  },
};

module.exports = nextConfig;
