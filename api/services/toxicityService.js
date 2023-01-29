const plantsData = require('../plants.json');
const plantsUpdatedData = require('../plantsUpdated.json');
const PlantnetToxicity = require('../models/plantnetToxicity');
const Plant = require('../models/plant');
const axios = require('axios');
let cachePlantnet = [];
class ToxicityService {
    getScientificName = async(queryName) =>{
        const urlScientific = `https://api.plantnet.org/v1/projects/the-plant-list/species?pageSize=50&page=0&lang=fr&search=${encodeURI(queryName)}`;
        const res = await axios.get(urlScientific).then(response => response.data)
        .then(res => {
            return res ? `${res[0].name} ${res[0].author}` : false
        })
        .catch(console.log)
        return res;
    }
    getAllPlantsToxicityPlantnet = async() =>{
        let plants = await Promise.resolve(plantsData.map(plant => new Plant(plant)));
        if(!cachePlantnet.allToxicities){
            let res = await Promise.all(
                plants.map(async (plant) =>{
                    const queryName = plant.scientificName?plant.scientificName:plant.name;
                    let scientificName = await this.getScientificName(queryName)
                    if (!scientificName) {
                        if(queryName.localeCompare(plant.name)===0){
                            return plant;
                        }
                        else{
                            scientificName = await this.getScientificName(plant.name)
                            if (!scientificName) {
                                return plant;
                            }
                        }
                    }                    
                    const url = `https://api.plantnet.org/v1/projects/the-plant-list/species/autocomplete/${encodeURI(scientificName)}?lang=fr`;
                    let plantNetData = await axios.get(url)
                    .then(response => response.data)
                    .then(res => {
                        for (let key in res.images) {
                            res.images[key] = res.images[key][0]['m']
                        }
                        return {
                            images: res.images,
                            gbif: res.gbif,
                            commonNames: res.commonNames,
                            plantNetScientificName: scientificName
                        };
                    })
                    .catch(console.log)
                    if(!plantNetData){
                        plantNetData = {
                            images:{},
                            gbif: {},
                            commonNames: [],
                            plantNetScientificName: ''
                        }
                    }
                    return {...plant, ...plantNetData};
                })
            )
            cachePlantnet.allToxicities = res;
        }
        return cachePlantnet.allToxicities;
    }
    getAllPlantsToxicity = async() =>{
        let plants = await Promise.resolve(plantsUpdatedData.map(plant => new Plant(plant)));

        return plants;
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