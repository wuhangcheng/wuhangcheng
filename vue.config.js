module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  devServer: {
      proxy: {//如需跨域请求多个域名，在此对象进行扩展即可
          '/apis': {
              target: 'http://localhost:8080/',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                  '^/apis': ''
              }
          },
          
      }
  }
}
