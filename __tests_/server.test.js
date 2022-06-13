'use strict';

// const { hasUncaughtExceptionCaptureCallback } = require('process');
const supertest = require('supertest');
// const { isTypedArray } = require('util/types');
// const { describe } = require('yargs'); //VS auto added this
const server = require('../src/server');
const request = supertest(server.app);

describe('Server Tests', () => {
  describe('GET requests', () => {
    it(`Responds with a 200 status code to a get a request to '/'`, async () => {
      // console.log(response);
      const response = await request.get('/');
      expect(response.status).toEqual(200);
    });
    test('Hello route wroks as expected', async () => {
      const response = await request.get('/hello');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Hello World');
    });
  });
});
