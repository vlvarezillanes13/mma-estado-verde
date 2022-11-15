import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foro-home',
  templateUrl: './foro-home.component.html',
  styleUrls: ['./foro-home.component.css']
})
export class ForoHomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
