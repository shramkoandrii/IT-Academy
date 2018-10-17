import { Component, OnInit, Input } from '@angular/core';

import { Pet } from 'src/app/shared/models/pet.model';
import { PetService } from 'src/app/shared/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  @Input() allPetsdata: Pet[];
  @Input() catsData: Pet[];
  @Input() fluffyOrWhiteData: Pet[];
  @Input() getGreaterThanAverageData: Pet[];

  constructor(private petService: PetService) { }

  onDelete(pet) {
    this.allPetsdata = this.allPetsdata.filter(item => item.id !== pet.id);
    this.catsData = this.catsData.filter(item => item.id !== pet.id);
    this.fluffyOrWhiteData = this.fluffyOrWhiteData.filter(item => item.id !== pet.id);
    this.getGreaterThanAverageData = this.getGreaterThanAverageData.filter(item => item.id !== pet.id);
    this.petService.deletePet(pet.id)
      .subscribe();
  }

  onEdit(pet){
    
  }

  ngOnInit() {
  }

}
