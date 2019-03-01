module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      'now-build': 'npm run build'
    }
  })

  api.render('./template')
}
