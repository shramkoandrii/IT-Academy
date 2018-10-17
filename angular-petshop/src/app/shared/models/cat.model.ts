import { Pet } from "./pet.model";

export class Cat extends Pet {

    constructor(
        public type: string, 
        public name: string, 
        public color: string,
        public price: number,
        public fluffy: number
    ) {
        super(type, color, price);
    }

}