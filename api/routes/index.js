const express = require('express');

const usuario = require('../routes/usuarioRoute');
const produto = require('../routes/produtoRoute');

module.exports = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'API Endpoint' });
  });

  app.use(express.json(), usuario, produto);
};
