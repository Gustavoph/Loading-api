const UsuarioModel = require('../../models/Usuario.js');

module.exports = {
  async usuario(_, { filtro }) {
    const usuario = await UsuarioModel.findById(filtro._id)
    return usuario
  },
}