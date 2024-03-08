const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');

const router = Router();

router.post('/produto', ProdutoController.cadastrar);
router.get('/produto', ProdutoController.buscarTodos);
router.get('/produto/id/:id', ProdutoController.buscarPorId);
router.put('/produto/id/:id', ProdutoController.editar);
router.delete('/produto/id/:id', ProdutoController.deletar);

module.exports = router;
