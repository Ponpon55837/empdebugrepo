const withFrameWork = require('@efox/emp-vue3')
module.exports = withFrameWork(({config}) => {
  const projectName = 'vueApp3'
  config.devServer.port(8003)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        filename: 'emp.js',
        remotes: {
          // '@vue3Project': 'vue3Project@http://localhost:8006/emp.js',
          // '@v3app3': 'vue3Project@http://localhost:8003/emp.js'
        },
        exposes: {
          './Layout': './src/components/Layout',
          './Home': './src/components/Home'
        },
        shared: {
          vue: {eager: true, singleton: true, requiredVersion: '^3.0.2'},
        },
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
