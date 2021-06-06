const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  webpack: (config, { buildId, dev }) => {
    // This allows the app to refer to files through our symlink
    config.resolve.symlinks = false
    return config
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  
}
