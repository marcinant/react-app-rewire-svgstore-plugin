const SvgStore = require('webpack-svgstore-plugin')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireSvgstorePlugin(config, env, svgstorePluginOptions = {}) {
  // Add the Svgstore plugin to the list of plugins
  config.plugins = (config.plugins || []).concat([
    new SvgStore(svgstorePluginOptions)
  ])

  return config
}

module.exports = rewireSvgstorePlugin
