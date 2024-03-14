const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');
const database = require('../models');

class AuthService {
  async login(data) {
    const usuario = await database.usuarios.findOne({
      attributes: ['id', 'email', 'senha'],
      where: {
        email: data.email,
      },
    });

    if (!usuario) throw new Error('Usuário não cadastrado');

    const senhasIguais = await compare(data.senha, usuario.senha);

    if (!senhasIguais) throw new Error('Usuário ou senha inválido');

    const accessToken = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      jsonSecret.secret,
      {
        expiresIn: 300,
      }
    );

    return { accessToken };
  }
}

module.exports = AuthService;
