import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module'; 

@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule 
  ]
})
export class AdminModule { }
