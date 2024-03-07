const database = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid');

class UsuarioService {
  async cadastrar(data) {
    const usuario = await database.usuarios.findOne({
      where: {
        email: data.email,
      },
    });

    if (usuario) {
      throw new Error('Usuário já cadastrado');
    }

    try {
      const senhaHash = await hash(data.senha, 8);
      const novoUsuario = database.usuarios.create({
        id: uuid.v4(),
        nome: data.nome,
        email: data.email,
        senha: senhaHash,
      });
      return novoUsuario;
    } catch (error) {
      throw error;
    }
  }

  async buscarTodos() {
    return await database.usuarios.findAll();
  }
}

module.exports = UsuarioService;
