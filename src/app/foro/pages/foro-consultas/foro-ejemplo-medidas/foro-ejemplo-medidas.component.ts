import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro-ejemplo-medidas',
  templateUrl: './foro-ejemplo-medidas.component.html',
  styleUrls: ['./foro-ejemplo-medidas.component.css']
})
export class ForoEjemploMedidasComponent implements OnInit {


  pdfSrc: string = "/assets/PDF-MEDIDAS.pdf";
  constructor() { /* TODO document why this constructor is empty */ }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

}
