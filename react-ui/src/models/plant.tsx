import PlantToxicities from "./plantToxicities";

export default class Plant {
    public name: string;
    public url: string;
    public remarks: string[];
    public scientificName: string;
    public type: string;
    public toxicities : PlantToxicities;

    constructor(plantDto: any) {
        const {name, url, remarks, scientificName, type, toxicEquine, toxicBovin, toxicGoat, toxicSheep, toxicRabbit} = plantDto;

        this.name = name?name:"";
        this.url = url?url:"./assets/images/illusrations/image_placeholder.png";
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

        return this
    }
    public containsString(s: string): boolean{
        const searchedText = s.normalize('NFD').replace(/\p{Diacritic}/gu, "").toLocaleLowerCase();
        const name = this.name.normalize('NFD').replace(/\p{Diacritic}/gu, "").toLocaleLowerCase();
        const scientificName = this.scientificName.normalize('NFD').replace(/\p{Diacritic}/gu, "").toLocaleLowerCase();
        return name.includes(searchedText) || scientificName.includes(searchedText)
    }
}