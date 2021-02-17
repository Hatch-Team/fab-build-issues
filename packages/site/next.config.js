const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@hatch-team/ui-config"]);



const withServerless = (nextConfig = {}) => ({
  ...nextConfig,
  target: "serverless",
});



const nextConfig = {
  
  webpack: (config, options) => {
    const { isServer } = options;
    if (isServer) {
      config.optimization.moduleIds = "named";
      //TODO: make example for this
      //config.externals.push("bad-package");
    }
    return config;
  },
};

module.exports = withPlugins(
  [withTM,  withServerless],
  nextConfig
);