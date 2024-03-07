const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');

const router = Router();

router.get('/produto', ProdutoController.buscarTodos);
router.post('/produto', ProdutoController.cadastrar);

module.exports = router;
