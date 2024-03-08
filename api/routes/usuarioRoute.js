const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router.post('/usuario', UsuarioController.cadastrar);
router.get('/usuario', UsuarioController.buscarTodos);
router.get('/usuario/id/:id', UsuarioController.buscarPorId);
router.put('/usuario/id/:id', UsuarioController.editar);
router.delete('/usuario/id/:id', UsuarioController.deletar);

module.exports = router;
