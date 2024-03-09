const database = require('../models');
const uuid = require('uuid');

class PermissaoService {
  async cadastrar(data) {
    const permissao = await database.permissoes.findOne({
      where: {
        nome: data.nome,
      },
    });

    if (permissao) throw new Error('Permissão já cadastrada');

    try {
      const newPermissao = await database.permissoes.create({
        id: uuid.v4(),
        nome: data.nome,
        descricao: data.descricao,
      });
      return newPermissao;
    } catch (error) {
      throw new Error('Erro ao cadastrar permissão');
    }
  }

  async buscarTodos() {
    return await database.permissoes.findAll();
  }

  async buscarPorId(id) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: id,
      },
    });

    if (!permissao) throw new Error('Permissão informada não cadastrado');

    return permissao;
  }

  async editar(data) {
    const permissao = await this.buscarPorId(data.id);

    try {
      permissao.nome = data.nome;
      permissao.descricao = data.descricao;

      await permissao.save();
      return await permissao.reload();
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    await this.buscarPorId(id);

    try {
      await database.permissoes.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PermissaoService;
