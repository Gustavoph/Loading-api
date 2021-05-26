const UsuarioModel = require('../../models/Usuario.js');

module.exports = {
    async criarUsuario(_, { dados }) {
        await UsuarioModel.create({
            _id: dados._id,
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha
        })

        return dados;
    },
    async deletarUsuario(_, { filtro }) {
        const id = filtro._id;
        const response = await UsuarioModel.findByIdAndDelete(id);
        return response ? true : false
    },

    async atualizarUsuario(_, { filtro, dados }) {
        const usuario = await UsuarioModel.findByIdAndUpdate( filtro._id, {
            _id: filtro._id,
            nome: dados.nome,
            email: dados.id,
            senha: dados.senha
        })
        return usuario
    }

}