const path = require('path')
const rm = require('rimraf')
const mkdirp = require('mkdirp').sync
const {Clone} = require('nodegit')

module.exports = function ({request}, N) {
  console.log(request.body.url)
  let url = request.body.url || ''
  let dir = path.join(N.git, path.basename(url))
  return new Promise((res, rej) => {
    rm(dir, () => {
      mkdirp(dir)
      res(Clone.clone(url, dir))
    })
  })
}