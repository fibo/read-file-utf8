const read = require('./read-file-utf8')

const file = 'example.js'

console.log(read(file))

read(file, (err, data) => {
  if (err) throw err

  console.log(`===\nFile ${file} has ${data.length} chars`)
})
