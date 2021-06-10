const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack:(config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('network', resolve('./src/network'))
      .set('views', resolve('./src/views'))
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://106.55.131.112:3000',
            changeOrigin: true
        },
        'avatar': {
          target: 'http://106.55.131.112:3000',
          changeOrigin: true
      }
    }
  }
  
}