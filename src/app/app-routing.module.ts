import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'foro',
    loadChildren: () => import('./foro/pages/foro-consultas/foro-consultas.module').then( m => m.ForoConsultasModule)
  },
  {
    path:'**',
    redirectTo:'foro'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
