const express = require('express');
const cors = require('cors');
const autenticado = require('../middleware/autenticado');

const usuario = require('../routes/usuarioRoute');
const produto = require('../routes/produtoRoute');
const auth = require('../routes/authRoute');
const role = require('../routes/roleRoute');
const permissao = require('../routes/permissaoRoute');
const seguranca = require('../routes/seguranca');

const corsOption = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
};

module.exports = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'API Endpoint' });
  });

  app.use(
    express.json(),
    cors(),
    auth,
    autenticado,
    usuario,
    produto,
    role,
    permissao,
    seguranca
  );
};
