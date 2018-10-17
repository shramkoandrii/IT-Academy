import { Component, OnInit } from '@angular/core';

import { PetService } from '../shared/services/pet.service';
import { Pet } from '../shared/models/pet.model';

@Component({
  selector: 'app-pet-shop',
  templateUrl: './pet-shop.component.html',
  styleUrls: ['./pet-shop.component.css']
})

export class PetShopComponent implements OnInit {

  allPetsdata: Pet[];
  catsData: Pet[];
  fluffyOrWhiteData: Pet[];
  getGreaterThanAverageData: Pet[];
  
  constructor(public petService: PetService) { }

  recieveData() {
    this.petService.getAllPets()
      .subscribe(pets => this.allPetsdata = pets)
    this.petService.getAllCats()
      .subscribe(cats => this.catsData = cats)
    this.petService.getFluffyOrWhite()
      .subscribe(pets => this.fluffyOrWhiteData = pets)
    this.petService.getGreaterThanAverage()
      .subscribe(cats => this.getGreaterThanAverageData = cats)
  }

  ngOnInit() {
    this.petService.getAllPets()
      .subscribe(pets => this.allPetsdata = pets)
    this.petService.getAllCats()
      .subscribe(cats => this.catsData = cats)
    this.petService.getFluffyOrWhite()
      .subscribe(pets => this.fluffyOrWhiteData = pets)
    this.petService.getGreaterThanAverage()
      .subscribe(cats => this.getGreaterThanAverageData = cats)
  }

  // getAllCats(pets: Pet[]) {
  //   let cats = pets.filter((pet: Cat) => pet.type === 'Cat');
  //   return cats;
  // }

  // getFluffyOrWhite(pets) {
  //   let fluffyOrWhite = pets.filter(pet => pet.color  === 'white' || (pet.hasOwnProperty('fluffy') && pet.fluffy !== 0));
  //   return fluffyOrWhite;
  // }

  // getAvaragePrice (pets: Pet[]) {
  //   let summaryPrice = pets.reduce((current, next) => {
  //     return current + next.price;
  //   }, 0);
  //   return summaryPrice / pets.length;
  // }

  // getGreaterThanAverage(pets: Pet[]) {
  //   let greaterThanAverage =  pets.filter(value => value.price > this.getAvaragePrice(pets));
  //   return greaterThanAverage;
  // }
}
