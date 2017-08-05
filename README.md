# feathers-nginx-conf

[![Build Status](https://travis-ci.org/marshallswain/feathers-nginx-conf.png?branch=master)](https://travis-ci.org/marshallswain/feathers-nginx-conf)
[![Code Climate](https://codeclimate.com/github/marshallswain/feathers-nginx-conf/badges/gpa.svg)](https://codeclimate.com/github/marshallswain/feathers-nginx-conf)
[![Test Coverage](https://codeclimate.com/github/marshallswain/feathers-nginx-conf/badges/coverage.svg)](https://codeclimate.com/github/marshallswain/feathers-nginx-conf/coverage)
[![Dependency Status](https://img.shields.io/david/marshallswain/feathers-nginx-conf.svg?style=flat-square)](https://david-dm.org/marshallswain/feathers-nginx-conf)
[![Download Status](https://img.shields.io/npm/dm/feathers-nginx-conf.svg?style=flat-square)](https://www.npmjs.com/package/feathers-nginx-conf)

> Make edits to Nginx.conf through the Feathers Service Interface

## Installation

```
npm install feathers-nginx-conf --save
```

## Documentation

Please refer to the [feathers-nginx-conf documentation](http://docs.feathersjs.com/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `feathers-nginx-conf`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const plugin = require('feathers-nginx-conf');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
