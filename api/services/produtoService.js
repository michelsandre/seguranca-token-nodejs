const database = require('../models');
const uuid = require('uuid');

class ProdutoService {
  async cadastrar(data) {
    const produto = await database.produtos.findOne({
      where: {
        nome: data.nome,
      },
    });

    if (produto) {
      throw new Error('Produto já cadastrado');
    }

    try {
      const newProduto = await database.produtos.create({
        id: uuid.v4(),
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
      });

      return newProduto;
    } catch (error) {
      throw error;
    }
  }

  async buscarTodos() {
    return await database.produtos.findAll();
  }

  async buscarPorId(id) {
    const produto = await database.produtos.findOne({
      where: {
        id: id,
      },
    });

    if (!produto) throw new Error('Produto informado não cadastrado');

    return produto;
  }

  async editar(data) {
    const produto = await this.buscarPorId(data.id);

    if (!produto) throw new Error('Produto informado não cadastrado');

    try {
      produto.nome = data.nome;
      produto.descricao = data.descricao;
      produto.preco = data.preco;

      await produto.save();
      return await produto.reload();
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    await this.buscarPorId(id);

    try {
      await database.produtos.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProdutoService;
