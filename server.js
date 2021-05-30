const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./graphql/index')
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('stringconecção',
	{
		poolSize: 5,
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})

mongoose.set('useCreateIndex', true)
mongoose.connection.on('error', (err) => {
	console.log('Erro no banco ' + err)
})
mongoose.connection.on('connected', () => {
	console.log('🔥 Database conectada !')
})
const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.gql'),
    resolvers,
    formatError: (err) => {
        if(err.message.startsWith("Usuário já cadastrado")){
            return new Error(err.message);
        }else {
            return err
        }
    }
})


server.listen(port).then(({ url }) => {
    console.log(`🔥 Executando em : ${url}`)
})
