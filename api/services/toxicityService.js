const plantsData = require('../plants.json');
const PlantnetToxicity = require('../models/plantnetToxicity');
const Plant = require('../models/plant');

class ToxicityService {
    getAllPlantsToxicity = () =>{
        return Promise.resolve(plantsData.map(plant => new Plant(plant)));
    }
    getPlantsToxicity = async (plants) => {
        return Promise.resolve(
            plants.map(plant=>{
                let result = plant;
                for (let plantData of plantsData) {
                    const isRecognized = this.comparePlants(plant, plantData);

                    if (isRecognized) {
                        result = {
                            ...plant,
                            ...plantData
                        };
                        break;
                    }
                }
                return new PlantnetToxicity(result);
            })
        ).catch(error => Promise.reject("Unable to get toxicity of plants"))

    }

    comparePlants = (plantnetResult, plant2) => {
        return plant2.scientificName?plantnetResult.species.scientificName.toLocaleLowerCase().includes(plant2.scientificName.toLocaleLowerCase()):false ||
            plantnetResult.species.scientificName.toLocaleLowerCase().includes(plant2.name.toLocaleLowerCase()) ||
            plantnetResult.species.commonNames.find(x => {
                return x.toLocaleLowerCase().includes(plant2.name.toLocaleLowerCase())
            });
    }
}


module.exports = new ToxicityService();