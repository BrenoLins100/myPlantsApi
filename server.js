const fastify = require('fastify')({logger: true});
const cors = require('@fastify/cors');
const mongoose = require('mongoose');

require('dotenv').config();

const MONGODB_URI = process.env.DB_URL

//Conectando ao Banco

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to Mongoose DB');
}).catch(err =>{
    console.log('Error connecting to DB '+err);
});

// Rota raiz

fastify.get('/', async () => {
    return {hello: 'world'}
})


//Registrando Rotas de plantas

fastify.register(require('./Routes/PlantsRoutes'), {prefix: '/myplants' });

//Permitindo CORS

fastify.register(cors,{
    origin: '*',
})

const start = async () =>{
    try{
        await fastify.listen({port: 3000})
    } catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
};

start();

