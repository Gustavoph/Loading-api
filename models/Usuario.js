const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioModel = new Schema({
	_id: {
		type: String,
	},
	nome: {
		type: String
	},
	email: {
		type: String
	},
    senha: {
        type: String
    }
})

module.exports = mongoose.model('usuario', UsuarioModel)