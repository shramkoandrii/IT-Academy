import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PetShopComponent } from './pet-shop/pet-shop.component';
import { PetService } from './shared/services/pet.service';
import { PetFormComponent } from './pet-shop/pet-form/pet-form.component';
import { PetListComponent } from './pet-shop/pet-list/pet-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PetShopComponent,
    PetFormComponent,
    PetListComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
