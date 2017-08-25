const path = require('path')

const src = path.join(__dirname, 'src')

module.exports = {
  srcDir: src,
  build: {
    extend (config) {
      config.resolve.alias['assets'] = path.join(src, 'assets')
      config.resolve.alias['components'] = path.join(src, 'components')
      config.resolve.alias['styles'] = path.join(src, 'styles')
      config.resolve.alias['utils'] = path.join(src, 'utils')
    }
  }
}
