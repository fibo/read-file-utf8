const fs = require('fs')

/**
 * Read content from file using utf8 encoding
 *
 * @param {String} filePath
 * @param {Function} [callback]
 */

function readFileUtf8 (filePath, callback) {
  if (typeof callback === 'function') {
    fs.readFile(filePath, 'utf8', callback)
  } else {
    return fs.readFileSync(filePath, 'utf8')
  }
}

module.exports = readFileUtf8
