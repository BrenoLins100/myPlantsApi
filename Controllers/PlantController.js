const Plant = require("../Models/Plant");

exports.createPlant = async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    res.code(201).send(plant);
  } catch (err) {
    res.code(500).send(err);
  }
};

exports.getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.send(plants);
  } catch (err) {
    res.code(500).send(err);
  }
}
  exports.getPlant = async (req, res) => {
    try {
      const plant = await Plant.findById(req.params.id);
      if (!plant) {
        res.code(404).send(err);
      } else {
        res.send(plant);
      }
    } catch (err) {
      res.code(500).send(err);
    }
  };

  exports.updatePlant = async (req, res) => {
    try{
        const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!plant){
            res.code(404).send();
        } else{
            res.send(plant);
        }
    } catch(err){
        res.code(500).send(err);
    }
  }

  exports.deletePlant = async (req,res) =>{
    try{
        const plant = await Plant.findByIdAndDelete(req.params.id);
        if(!plant){
            res.code(404).send();
        } else{
            res.send(plant)
        }
    } catch(err){
        res.code(500).send(err)
    }
  }

