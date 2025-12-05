# read-file-utf8

> reads content from file using utf-8 encoding, also imports JSON files easily

## Installation

With [npm](https://npmjs.org/) do

```sh
npm install read-file-utf8
```

## Usage

`read<T = string>(filePath: string): Promise<T>`

Read from a text file.

```js
import read from 'read-file-utf8';

const filePath = 'path/to/file.txt';

try {
  // Read file content.
  const content = await read(filePath)

  console.log(content)
} catch (error) {
  // In case you do not have permissions,
  // you may want to handle it here.
  console.error(error)
}
```

Read from a JSON file: given the `.json` extension then `JSON.parse` is used to parse it.

```js
// Read version from package.json file.
const { version } = await read('./package.json');

console.log(version)
```

If you are using TypeScript can provide the type of your JSON.

```ts
const { version } = await read<{ version: string }>('./package.json');
```

> [!WARNING]
> No validation is done on the JSON content.

## See also

- [write-file-utf8](https://github.com/fibo/write-file-utf8)

## License

[MIT](https://fibo.github.io/mit-license/)

