const express = require('express');

const usuario = require('../routes/usuarioRoute');
const produto = require('../routes/produtoRoute');

module.exports = (app) => {
  app.use(express.json(), usuario, produto);
};
