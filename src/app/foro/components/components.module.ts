import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarruselComponent } from './carrusel/carrusel.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    CarruselComponent
  ]
})
export class ComponentsModule { }
