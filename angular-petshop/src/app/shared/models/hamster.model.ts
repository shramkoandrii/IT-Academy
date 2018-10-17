import { Pet } from "./pet.model";

export class Hamster extends Pet {

    constructor(
        public type: string, 
        public color: string,
        public price: number,
        public fluffy: number
    ) {
        super(type, color, price);
    }

}