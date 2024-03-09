const { Router } = require("express");
const RoleController = require("../controllers/roleController");
const router = Router();

router.post("/role", RoleController.cadastrar);
router.get("/role", RoleController.buscarTodos);
router.get("/role/:id", RoleController.buscarPorId);
router.put("/role/:id", RoleController.editar);
router.delete("/role/:id", RoleController.deletar);

module.exports = router;
