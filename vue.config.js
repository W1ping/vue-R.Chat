
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://106.55.131.112:3000',
            changeOrigin: true
        }
    }
  }
  
}