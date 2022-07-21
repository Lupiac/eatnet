class Plant {
    constructor(plantDto) {
        const {name, url, remarks, scientificName, type, toxicEquine, toxicBovin, toxicGoat, toxicSheep, toxicRabbit} = plantDto;

        this.name = name?name:"",
        this.url = process.env.API_URL + url?url:"/assets/images/image_placeholder.png",
        this.remarks = remarks?remarks:[],
        this.scientificName = scientificName?scientificName:"",
        this.type = type?type:"",
        this.toxicEquine = toxicEquine?toxicEquine:0,
        this.toxicBovin = toxicBovin?toxicBovin:0,
        this.toxicGoat = toxicGoat?toxicGoat:0,
        this.toxicSheep = toxicSheep?toxicSheep:0,
        this.toxicRabbit = toxicRabbit?toxicRabbit:0
    }
}
module.exports = Plant;