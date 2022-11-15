import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoPreguntasFrecuentesComponent } from './foro-preguntas-frecuentes.component';

describe('ForoPreguntasFrecuentesComponent', () => {
  let component: ForoPreguntasFrecuentesComponent;
  let fixture: ComponentFixture<ForoPreguntasFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoPreguntasFrecuentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForoPreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
