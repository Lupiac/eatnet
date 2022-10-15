import PlantToxicities from "./plantToxicities";

export default class PlantnetAnalysisResult {
    public name: string;
    public remarks: string[];
    public scientificName: string;
    public type: string;
    public toxicities : PlantToxicities;
    public score: number;
    public species: any;
    public images: any[];
    constructor(plantDto: any) {
        const {name, remarks, scientificName, type, toxicEquine, toxicBovin, toxicGoat, toxicSheep, toxicRabbit, score, species, images} = plantDto;

        this.name = name?name:"";
        this.remarks = remarks?remarks:[];
        this.scientificName = scientificName?scientificName:"";
        this.type = type?type:"";
        const _toxicities = {
            rabbit: toxicRabbit?toxicRabbit:0,
            equine: toxicEquine?toxicEquine:0,
            bovin: toxicBovin?toxicBovin:0,
            goat: toxicGoat?toxicGoat:0,
            sheep: toxicSheep?toxicSheep:0
        }
        this.toxicities = new PlantToxicities(_toxicities)
        this.species = species;
        this.score = score;
        this.images = images;
        return this
    }
}