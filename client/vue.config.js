module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      "/good-beers": {
        target: "http://localhost:8080",
        secure: false
      }
    }
  }
};