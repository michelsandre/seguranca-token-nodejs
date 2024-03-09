const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");

const router = Router();

router
  .post("/usuario", UsuarioController.cadastrar)
  .get("/usuario", UsuarioController.buscarTodos)
  .get("/usuario/id/:id", UsuarioController.buscarPorId)
  .put("/usuario/id/:id", UsuarioController.editar)
  .delete("/usuario/id/:id", UsuarioController.deletar);

module.exports = router;
