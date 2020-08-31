const fse = require ('fs-extra')

fse.remove('/removeBuildFolder', err => {
  if (err) return console.error('error delete folder', err)
  console.log('Build folder was removed!')
})