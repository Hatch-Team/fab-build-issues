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
      console.log("Excluding unneeded server side packages")
      config.optimization.moduleIds = "named";
      // Lets exclude this as we dont use it
      // Without this the bad code will be pushed into the .next/serverless/pages and break when run
      config.externals.push("bad-package");
    }
    return config;
  },
};

module.exports = withPlugins(
  [withTM,  withServerless],
  nextConfig
);