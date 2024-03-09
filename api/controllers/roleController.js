const RoleService = require("../services/roleService");
const roleService = new RoleService();

class RoleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;

    try {
      const role = await roleService.cadastrar({ nome, descricao });
      res.status(201).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarTodos(req, res) {
    try {
      const roles = await roleService.buscarTodos();
      res.status(200).send(roles);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const role = await roleService.buscarPorId(id);
      res.status(200).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async editar(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const role = await roleService.editar({ id, nome, descricao });
      res.status(200).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;

    try {
      await roleService.deletar(id);
      res.status(200).send({ message: "Role deletada com sucesso!" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = RoleController;
