const express = require('express');
const autenticado = require('../middleware/autenticado');

const usuario = require('../routes/usuarioRoute');
const produto = require('../routes/produtoRoute');
const auth = require('../routes/authRoute');
const role = require('../routes/roleRoute');
const permissao = require('../routes/permissaoRoute');
const seguranca = require('../routes/seguranca');

module.exports = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'API Endpoint' });
  });

  app.use(
    express.json(),
    auth,
    autenticado,
    usuario,
    produto,
    role,
    permissao,
    seguranca
  );
};
