export default class Referential {
    public id: string;
    public title: string;
    public description: string;

    constructor(referentialDto: any) {
        const {id, title, description} = referentialDto;
        this.id = id;
        this.title = title;
        this.description = description

        return this
    }
}