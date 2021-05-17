'use strict';

const server = require('../src/server');

const supertest = require('supertest');

const server2 = supertest(server.app);


describe('Test the query', () => {

  it('when no name in the query!', async() => {
    let result = await server2.get('/person');
    expect(result.status).toEqual(500);
  });

  it('when there is a name in the query', async() => {
    let query = 'neveen';
    let result = await server2.get(`/person?name=${query}`);
    expect(result.status).toEqual(200);
  });
});