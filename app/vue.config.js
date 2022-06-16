module.exports={
    lintOnSave:false,
    productionSourceMap:false,
    devServer: {
        proxy: {
          '/api': {
            target: 'http://gmall-h5-api.atguigu.cn',
            pathRewrite: { '^/api': '' },
          },
        },
      },
}
