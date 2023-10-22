import read from './read-file-utf8.js'

const filePath = 'file.txt'

  try {
    // Read file content.
    const content = await read(filePath)

    console.log(content)
  } catch (error) {
    // In case you do not have permissions,
    // you may want to handle it here.
    console.error(error)
  }

// Read version from package.json.
const { version } = await read("./package.json")

console.log(version)
