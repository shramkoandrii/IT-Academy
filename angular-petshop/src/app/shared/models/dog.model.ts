import { Pet } from "./pet.model";

export class Dog extends Pet {

    constructor(
        public type: string, 
        public name: string, 
        public color: string,
        public price: number
    ) {
        super(type, color, price);
    }

}