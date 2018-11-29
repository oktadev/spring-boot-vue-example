module.exports = {
  devServer: {
    proxy: {
      "/good-beers": {
        target: "http://localhost:8080",
        secure: false
      }
    }
  }
};