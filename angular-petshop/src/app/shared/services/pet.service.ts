import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Pet } from "../models/pet.model";
import { Cat } from "../models/cat.model";

@Injectable()
export class PetService {

    private dataServer: string = "http://localhost:3000/";

    constructor(public http: Http) { }

    createNewPet(pet: Pet): Observable<Pet[]> {
        return this.http.post(`${this.dataServer}pets`, pet)
            .pipe(map((response: Response) => response.json()))
    }

    deletePet(petId: Pet): Observable<Pet[]> {
        return this.http.delete(`${this.dataServer}pets/${petId}`)
            .pipe(map((response: Response) => response.json()))
    }

    updatePet(pet): Observable<Pet[]> {
        return this.http.put(`${this.dataServer}pets`, pet)
            .pipe(map((response: Response) => response.json()))
    }

    getAllPets(): Observable<Pet[]> {
        return this.http.get(`${this.dataServer}pets`)
            .pipe(map((response: Response) => response.json()))
    }

    getAllCats(): Observable<Pet[]> {
        return this.http.get(`${this.dataServer}pets`)
            .pipe(map((response: Response) => response.json()))
            .pipe(map(pets => pets.filter((pet: Cat) => pet.type === 'Cat')))
    }

    getFluffyOrWhite(): Observable<Pet[]> {
        return this.http.get(`${this.dataServer}pets`)
            .pipe(map((response: Response) => response.json()))
            .pipe(map(pets => pets.filter(pet => pet.color  === 'white' || (pet.hasOwnProperty('fluffy') && pet.fluffy !== 0))))
    }

    getAvaragePrice (pets: Pet[]) {
        let summaryPrice = pets.reduce((current, next) => {
            return current + next.price;
        }, 0);
        return summaryPrice / pets.length;
    }

    getGreaterThanAverage() {
        return this.http.get(`${this.dataServer}pets`)
            .pipe(map((response: Response) => response.json()))
            .pipe(map((pet: Pet[]) => pet.filter(value => value.price > this.getAvaragePrice(pet))))
    }

}