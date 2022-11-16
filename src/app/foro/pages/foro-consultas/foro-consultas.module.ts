import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ForoConsultasRoutingModule } from './foro-consultas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { ForoConsultasComponent } from './foro-consultas.component';
import { ForoHomeComponent } from './foro-home/foro-home.component';
import { ForoPreguntasFrecuentesComponent } from './foro-preguntas-frecuentes/foro-preguntas-frecuentes.component';
import { ForoEjemploMedidasComponent } from './foro-ejemplo-medidas/foro-ejemplo-medidas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForoConsultasComponent,
    ForoHomeComponent,
    ForoPreguntasFrecuentesComponent,
    ForoEjemploMedidasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ForoConsultasRoutingModule,
    SharedModule,
    ComponentsModule,
    PdfViewerModule
  ]
})
export class ForoConsultasModule { }
