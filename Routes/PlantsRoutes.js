const PlantController =  require('../Controllers/PlantController');

function plantRoutes(fastify, options, done) {

    // Rota para criar uma nvoa planta
    
    fastify.post('/plants', PlantController.createPlant);

    //GET All
    fastify.get('/plants', PlantController.getPlants);

    // GET{ID}

    fastify.get('/plants/:id', PlantController.getPlant);

    // Put
    fastify.put('/plants/:id', PlantController.updatePlant);
    

    // delete
    fastify.delete('/plants/:id', PlantController.deletePlant)
    

    done();

}

module.exports = plantRoutes;