import { Component, OnInit } from '@angular/core';
import { IPregunta } from 'src/app/common/interfaces/pregunta.interface';
import { LISTA_PREGUNTAS_FRECUENTES } from 'src/app/common/preguntas/lista-preguntas';

@Component({
  selector: 'app-foro-preguntas-frecuentes',
  templateUrl: './foro-preguntas-frecuentes.component.html',
  styleUrls: ['./foro-preguntas-frecuentes.component.css']
})
export class ForoPreguntasFrecuentesComponent implements OnInit {

  listaPreguntas: IPregunta[] = [];
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    
    this.listaPreguntas = LISTA_PREGUNTAS_FRECUENTES;
  }

  public getHeading(id: number): String{
    return `panelsStayOpen-heading${id}`
  }

  public getPanel(id: number): String{
    return `panelsStayOpen-collapse${id}`
  }


  public getPanelId(id: number): String{
    return `#panelsStayOpen-collapse${id}`
  }

}
