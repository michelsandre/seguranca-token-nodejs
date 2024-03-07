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
}

module.exports = ProdutoService;
