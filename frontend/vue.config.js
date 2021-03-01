module.exports = {
  assetsDir: "frontend/src/assets",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Sinus Skateboard";
      return args;
    });
  }
};
