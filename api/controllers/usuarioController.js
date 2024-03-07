const UsuarioService = require('../services/usuarioService');

const usuarioService = new UsuarioService();

class UsuarioController {
  static async buscarTodos(req, res) {
    try {
      const usuarios = await usuarioService.buscarTodos();
      res.status(200).send(usuarios);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = await usuarioService.cadastrar({ nome, email, senha });
      res.status(201).send(usuario);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = UsuarioController;
