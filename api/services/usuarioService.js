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

    if (usuario) throw new Error('Usuário já cadastrado');

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

  async buscarPorId(id) {
    const usuario = await database.usuarios.findOne({
      where: {
        id: id,
      },
    });

    if (!usuario) throw new Error('Usuário informado não cadastrado');

    return usuario;
  }

  async editar(data) {
    const usuario = await this.buscarPorId(data.id);

    try {
      usuario.nome = data.nome;
      usuario.email = data.email;

      await usuario.save();
      return await usuario.reload();
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    await this.buscarPorId(id);

    try {
      await database.usuarios.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsuarioService;
