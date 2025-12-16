import read from './read-file-utf8.js'

try {
  // Read file content.
  const content = await read('file.txt')

  console.log(content)
} catch (error) {
  // In case you do not have permissions,
  // you may want to handle it here.
  console.error(error)
}

// Read version from package.json.
const { version } = await read<{ version: string }>("./package.json")

console.log(version)
