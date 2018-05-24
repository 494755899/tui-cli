var shx = require('shelljs')
var color = require('colors')

var templatePath = 'https://github.com/Bennnis/tui-temp.git'

var cloneTemplate = function (dirname) {
  return new Promise(function (resolve, reject) {
    console.log(color.yellow('template downloading...'))
    if (shx.exec('git cloness ' + templatePath + ' ' + dirname, {silent: true}).code === 0) { //success
      resolve()
    } else {
      reject(new Error('error in clone template, please check network'))
    }
  })
}

module.exports = cloneTemplate