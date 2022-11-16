import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoEjemploMedidasComponent } from './foro-ejemplo-medidas.component';

describe('ForoEjemploMedidasComponent', () => {
  let component: ForoEjemploMedidasComponent;
  let fixture: ComponentFixture<ForoEjemploMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoEjemploMedidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForoEjemploMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
