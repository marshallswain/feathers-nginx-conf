const assert = require('assert')
const plugin = require('../lib/conf.class');
const path = require('path')

describe('feathers-nginx-conf', () => {
  it('basic functionality', function (done) {
    assert(typeof plugin === 'function', 'It worked');

    const location = path.join(process.cwd(), 'test/confs/nginx.conf')
    plugin(location)
      .then(result => {
        console.log(result)
        done()
      })
      .catch(error => {
        assert(!error, error)
        done()
      })
  });
});
