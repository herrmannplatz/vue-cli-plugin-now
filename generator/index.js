module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      'now-build': 'npm run build'
    }
  })

  const pkgPath = api.resolve('./package.json')
  const pkg = require(pkgPath)
  const name = pkg.name || 'vue-app'

  api.render('./template', { name })
}
