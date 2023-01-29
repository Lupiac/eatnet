class Plant {
    constructor(plantDto) {
        const {name, url, remarks, scientificName, type, toxicEquine, toxicBovin, toxicGoat, toxicSheep, toxicRabbit, images, gbif, commonNames, plantNetScientificName} = plantDto;

        this.name = name?name:"",
        this.url = process.env.API_URL + url?url:"",
        this.remarks = remarks?remarks:[],
        this.scientificName = scientificName?scientificName:"",
        this.type = type?type:"",
        this.toxicEquine = toxicEquine?toxicEquine:0,
        this.toxicBovin = toxicBovin?toxicBovin:0,
        this.toxicGoat = toxicGoat?toxicGoat:0,
        this.toxicSheep = toxicSheep?toxicSheep:0,
        this.toxicRabbit = toxicRabbit?toxicRabbit:0,
        this.images = images? images: {},
        this.gbif = gbif? gbif: {},
        this.commonNames = commonNames? commonNames: [],
        this.plantNetScientificName = plantNetScientificName? plantNetScientificName: ''

    }   
}
module.exports = Plant;