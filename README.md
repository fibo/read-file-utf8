# read-file-utf8

> shortcut to [fs.readFile][readFile] or [fs.readFileSync][readFileSync]

* [API](#api)
* [Usage](#usage)
* [Use case](#use-case)
* [See also](#see-also)
* [License](#license)

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

## Use case

Suppose you have some SQL queries. It is really better to put every query
in its own *queryFile.sql*, instead then inside *someOtherFile.js*.

Create a *sql/* folder and put there all your queries. Add also a
*sql/index.js* with the following content

```javascript
var path = require('path')
var read = require('read-file-utf8')

function sql (fileName) {
  return read(path.join(__dirname, `${fileName}.sql`))
}

module.exports = sql
```

Now you are able to do, for example

```javascript
var sql = require('./path/to/sql')
var pgPromise = require('pg-promise')
var Q = require('q')

var connectionString = 'your connection string here'

var client = pgPromise({
  promiseLib: Q
})(connectionString)

client.oneOrNone(sql('count_winners'))
      .then((data) => { /* your code to handle data here */ })
```

## See also

* [write-file-utf8](http://npm.im/write-file-utf8)
* [fs.readFile][readFile]
* [fs.readFileSync][readFileSync]

## License

[MIT](http://g14n.info/mit-license/)

[readFile]: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
[readFileSync]: https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options
