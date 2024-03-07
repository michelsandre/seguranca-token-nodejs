const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router.get('/usuario', UsuarioController.buscarTodos);
router.post('/usuario', UsuarioController.cadastrar);

module.exports = router;
