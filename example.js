var read = require('./index.js')

var file = '.jshintrc'

console.log(read(file))

read(file, function (err, data) {
  console.log('\n===\nhas ' + data.length + ' chars')
})
