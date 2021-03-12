const withFrameWork = require('@efox/emp-vue3')
module.exports = withFrameWork(({config}) => {
  const projectName = 'vue3Project'
  config.devServer.port(8006)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        filename: 'emp.js',
        remotes: {
          '@vApp3': 'vueApp3@http://localhost:8003/emp.js'
        },
        exposes: {
          // './App': './src/App'
        },
        /* shared: {
          vue: {eager: true, singleton: true, requiredVersion: '^3.0.2'},
        }, */
      },
    }
    return args
  })
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'EMP Vue3 Project',
        files: {},
      },
    }
    return args
  })
})
