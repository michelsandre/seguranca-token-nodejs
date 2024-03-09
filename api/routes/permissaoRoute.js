const { Router } = require('express');
const PermissaoControler = require('../controllers/permissaoController');
const router = Router();

router.post('/permissao', PermissaoControler.cadastrar);
router.get('/permissao', PermissaoControler.buscarTodos);
router.get('/permissao/:id', PermissaoControler.buscarPorId);
router.put('/permissao/:id', PermissaoControler.editar);
router.delete('/permissao/:id', PermissaoControler.deletar);

module.exports = router;
