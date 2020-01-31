const fs = require('fs')

/**
 * Read content from file using utf8 encoding
 *
 * @param {String} filePath
 * @returns {Promise<String>} content
 */

function readFileUtf8 (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, content) => error ? reject(error) : resolve(content))
  })
}

module.exports = readFileUtf8
