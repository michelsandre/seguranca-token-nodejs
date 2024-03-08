const request = require('supertest');
const app = require('../../api/index.js');

let server;

let itemId = 'f034ab5f-1e57-4e27-8f80-89d9727d28b4';

beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /produto', () => {
  it('Deve retornar uma lista de produtos', async () => {
    const resposta = await request(app)
      .get('/produto')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body[0].nome).toEqual('Celular Samsumg');
  });
});

describe('GET em /produto/id/:id', () => {
  it('Deve retornar um item selecionado', async () => {
    await request(app).get(`/produto/id/${itemId}`).expect(200);
  });
});
