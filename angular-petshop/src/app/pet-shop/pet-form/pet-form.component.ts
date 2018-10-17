import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Pet } from 'src/app/shared/models/pet.model';
import { PetService } from 'src/app/shared/services/pet.service';
import { Cat } from 'src/app/shared/models/cat.model';
import { Dog } from 'src/app/shared/models/dog.model';
import { Hamster } from 'src/app/shared/models/hamster.model';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  @Output() formEvent = new EventEmitter<Pet[]>();

  form: FormGroup;
  selectedPet: string = '';
  pets: string[] = ['Choose', 'Cat', 'Dog', 'Hamster']

  constructor(private petService: PetService, private formBuilder: FormBuilder) { }

  addNewPet() {
    const {type, name, color, price, fluffy} = this.form.value;
    let pet: Pet;
    
    if(type === 'Cat') {
      pet = new Cat(type, name, color, price, fluffy);
    } else if(type === 'Dog') {
      pet = new Dog(type, name, color, price);
    } else if(type === 'Hamster') {
      pet = new Hamster(type, color, price, fluffy);
    }
    this.petService.createNewPet(pet)
      .subscribe(pet => this.formEvent.emit(pet));
    this.form.reset();
    this.selectedPet = 'Choose'
  }

  selectPet(event: any) {
    this.selectedPet = event.target.value;
  }

  validators(event: any) {
    let input = event.target.value;

    if(input === 'Cat') {
      let clearItems = ['type', 'name', 'color', 'price', 'fluffy']
      for(let i = 0; i < clearItems.length; i++) {
        this.form.get(clearItems[i]).clearValidators();
        this.form.get(clearItems[i]).updateValueAndValidity();
      }
      let validateItems = ['name', 'color', 'price']
      for(let i = 0; i < validateItems.length; i++) {
        this.form.get(validateItems[i]).setValidators([Validators.required]);
        this.form.get(validateItems[i]).updateValueAndValidity();
      }
    } else if(input === 'Dog') {
        let clearItems = ['type', 'name', 'color', 'price', 'fluffy'];
        for(let i = 0; i < clearItems.length; i++) {
          this.form.get(clearItems[i]).clearValidators();
          this.form.get(clearItems[i]).updateValueAndValidity();
        }
        let validateItems = ['name', 'color', 'price'];
        for(let i = 0; i < validateItems.length; i++) {
          this.form.get(validateItems[i]).setValidators([Validators.required]);
          this.form.get(validateItems[i]).updateValueAndValidity();
        }
    } else if(input === 'Hamster') {
        let clearItems = ['type', 'name', 'color', 'price', 'fluffy']
        for(let i = 0; i < clearItems.length; i++) {
          this.form.get(clearItems[i]).clearValidators();
          this.form.get(clearItems[i]).updateValueAndValidity();
        }
        let validateItems = ['color', 'price']
        for(let i = 0; i < validateItems.length; i++) {
          this.form.get(validateItems[i]).setValidators([Validators.required]);
          this.form.get(validateItems[i]).updateValueAndValidity();
        }
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'type': new FormControl(null),
      'name': new FormControl(null),
      'color': new FormControl(null),
      'price': new FormControl(null),
      'fluffy': new FormControl(null)
    });
    this.selectedPet = 'Choose'
  }

}
