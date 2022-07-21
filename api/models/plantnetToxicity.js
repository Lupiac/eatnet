const Plant = require('./plant');

class PlantnetToxicity extends Plant{
    constructor(plantnetToxicityDto) {
        const {score, species, images, gbif, name, url, remarks, scientificName, type, toxicEquine, toxicBovin, toxicGoat, toxicSheep, toxicRabbit} = plantnetToxicityDto;
        super({name, url, remarks, type, toxicEquine, toxicBovin, toxicGoat, toxicSheep, toxicRabbit});
        
        this.score = score?score: 0,
        this.species = species?species:{},
        this.images = images?images:[],
        this.gbif = gbif?gbif:0,
        this.scientificName = species?species['scientificName']:scientificName?scientificName:""
    }
}
module.exports = PlantnetToxicity;