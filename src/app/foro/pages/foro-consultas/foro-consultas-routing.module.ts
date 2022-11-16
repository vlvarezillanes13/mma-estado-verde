import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoConsultasComponent } from './foro-consultas.component';
import { ForoHomeComponent } from './foro-home/foro-home.component';
import { ForoPreguntasFrecuentesComponent } from './foro-preguntas-frecuentes/foro-preguntas-frecuentes.component';
import { ForoEjemploMedidasComponent } from './foro-ejemplo-medidas/foro-ejemplo-medidas.component';

const routes: Routes = [
  {
    path:'',
    component:ForoConsultasComponent,
    children:[
      {
        path:'home',
        component:ForoHomeComponent

      },
      {
        path:'medidas',
        component:ForoEjemploMedidasComponent
      },
      {
        path:'preguntas',
        component:ForoPreguntasFrecuentesComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForoConsultasRoutingModule { }
