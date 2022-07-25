export default class Plant {
    public name: string;
    public url: string;
    public remarks: string[];
    public scientificName: string;
    public type: string;
    public toxicEquine: number;
    public toxicBovin: number;
    public toxicGoat: number;
    public toxicSheep: number;
    public toxicRabbit: number;

    constructor(plantDto: any) {
        const {name, url, remarks, scientificName, type, toxicEquine, toxicBovin, toxicGoat, toxicSheep, toxicRabbit} = plantDto;

        this.name = name?name:"";
        this.url = url?url:"./assets/images/illusrations/image_placeholder.png";
        this.remarks = remarks?remarks:[];
        this.scientificName = scientificName?scientificName:"";
        this.type = type?type:"";
        this.toxicEquine = toxicEquine?toxicEquine:0;
        this.toxicBovin = toxicBovin?toxicBovin:0;
        this.toxicGoat = toxicGoat?toxicGoat:0;
        this.toxicSheep = toxicSheep?toxicSheep:0;
        this.toxicRabbit = toxicRabbit?toxicRabbit:0

        return this
    }
    public containsString(s: string): boolean{
        const name = this.name.normalize('NFD').replace(/\p{Diacritic}/gu, "").toLocaleLowerCase();
        const scientificName = this.scientificName.normalize('NFD').replace(/\p{Diacritic}/gu, "").toLocaleLowerCase();
        return name.includes(s) || scientificName.includes(s)
    }
}