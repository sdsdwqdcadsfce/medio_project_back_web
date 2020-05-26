const webpack = require('webpack')
module.exports = {
  configureWebpack: {

    plugins: [

      new webpack.ProvidePlugin({

        $:"jquery",

        jQuery:"jquery",

        "windows.jQuery":"jquery"

      })

    ]

  },
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
