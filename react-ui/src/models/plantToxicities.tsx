export default class PlantToxicities {
    public rabbit: number;
    public equine: number;
    public bovin: number;
    public goat: number;
    public sheep: number;

    constructor(plantToxicitiesDto: any) {
        const {rabbit, equine, bovin, goat, sheep} = plantToxicitiesDto;
        this.rabbit = rabbit;
        this.equine = equine;
        this.bovin = bovin;
        this.goat = goat;
        this.sheep = sheep;

        return this
    }
}