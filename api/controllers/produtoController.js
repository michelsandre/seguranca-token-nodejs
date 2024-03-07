const ProdutoService = require('../services/produtoService');

const produtoService = new ProdutoService();

class ProdutoController {
  static async buscarTodos(req, res) {
    try {
      const produtos = await produtoService.buscarTodos();
      res.status(200).send(produtos);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async cadastrar(req, res) {
    const { nome, descricao, preco } = req.body;

    try {
      const produto = await produtoService.cadastrar({ nome, descricao, preco });
      res.status(201).send(produto);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = ProdutoController;
