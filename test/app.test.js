const assert = require('assert');
const http = require('http');

describe('Express Hello World App', function () {
  let server;

  before(function (done) {
    const app = require('../index');
    server = app.listen(3001, done);
  });

  after(function (done) {
    server.close(done);
  });

  it('should return Hello World!', function (done) {
    http.get('http://localhost:3001/', (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(data, 'Hello World!');
        done();
      });
    });
  });
});
