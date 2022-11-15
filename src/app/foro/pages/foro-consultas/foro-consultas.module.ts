import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ForoConsultasRoutingModule } from './foro-consultas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { ForoConsultasComponent } from './foro-consultas.component';
import { ForoHomeComponent } from './foro-home/foro-home.component';
import { ForoPreguntasFrecuentesComponent } from './foro-preguntas-frecuentes/foro-preguntas-frecuentes.component';


@NgModule({
  declarations: [
    ForoConsultasComponent,
    ForoHomeComponent,
    ForoPreguntasFrecuentesComponent
  ],
  imports: [
    CommonModule,
    ForoConsultasRoutingModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class ForoConsultasModule { }
