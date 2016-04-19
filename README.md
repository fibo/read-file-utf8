# read-file-utf8

> shortcut to [fs.readFile][readFile] or [fs.readFileSync][readFileSync]

## API

### `readFile(filePath[, callback])`

* **@param** `{String}` filePath
* **@param** `{Function}` [callback] optionally passed to fs.readFile
* **@returns** `{String}` content, **only if** callback is not provided

## Usage

Given a callback to execute on *data*, for instance

```javascript
function callback (err, data) {
  if (err) throw err
  console.log(data)
}
```

then, the following code

```javascript
var read = require('read-file-utf8')

var filePath = '/tmp/foo'

read(filePath, callback)
```

actually is the same as

```javascript
var fs = require('fs')

var filePath = '/tmp/foo'

fs.readFile(filePath, 'utf8', callback)
```

If no callback is provided, the synchronous version is used, hence the snippet

```javascript
var content = read('/tmp/bar')
```

actually is equivalent to

```javascript
var content = fs.readFileSync('/tmp/bar', 'utf8')
```

## See also

* [write-file-utf8](http://npm.im/write-file-utf8)
* [fs.readFile][readFile]
* [fs.readFileSync][readFileSync]

## License

[MIT](http://g14n.info/mit-license/)

[readFile]: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
[readFileSync]: https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options
