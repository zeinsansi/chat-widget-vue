const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '^/users': {
        target: 'http://localhost:5173/',
        ws: true,
        changeOrigin: true
      },
    }
  }
} 