const database = require("../models");
const uuid = require("uuid");

class RoleService {
  async cadastrar(data) {
    const role = await database.roles.findOne({
      where: {
        nome: data.nome,
      },
    });

    if (role) throw new Error("Role já cadastrada");

    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: data.nome,
        descricao: data.descricao,
      });
      return newRole;
    } catch (error) {
      throw new Error("Erro ao cadastrar role");
    }
  }

  async buscarTodos() {
    return await database.roles.findAll();
  }

  async buscarPorId(id) {
    const role = await database.roles.findOne({
      where: {
        id: id,
      },
    });

    if (!role) throw new Error("Role informado não cadastrado");

    return role;
  }

  async editar(data) {
    const role = await this.buscarPorId(data.id);

    try {
      role.nome = data.nome;
      role.descricao = data.descricao;

      await role.save();
      return await role.reload();
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    await this.buscarPorId(id);

    try {
      await database.roles.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = RoleService;
