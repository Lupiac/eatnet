export default class Organ {
    public value: string;
    public text: string;

    constructor(organDto: any) {
        const {value, text} = organDto;
        this.value = value;
        this.text = text;

        return this
    }
}