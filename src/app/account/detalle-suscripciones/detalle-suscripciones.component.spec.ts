import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSuscripcionesComponent } from './detalle-suscripciones.component';

describe('DetalleSuscripcionesComponent', () => {
  let component: DetalleSuscripcionesComponent;
  let fixture: ComponentFixture<DetalleSuscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSuscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
