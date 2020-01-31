const read = require('read-file-utf8')

const filePath = 'file.txt'

// Since read-file-utf8 function will return a Promise,
// the most comfortable way to run it is inside an async function.
async function example () {
  try {
    // Read file content.
    //////////////////////////////////////////////////////////////////
    const content = await read(filePath)

    console.log(content)
  } catch (error) {
    // In case you do not have permissions,
    // you may want to handle it here.
    console.error(error)
  }
}

// Run example.
example()

