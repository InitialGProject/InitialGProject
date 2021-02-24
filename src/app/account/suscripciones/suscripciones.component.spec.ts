import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionesComponent } from './suscripciones.component';

describe('SuscripcionesComponent', () => {
  let component: SuscripcionesComponent;
  let fixture: ComponentFixture<SuscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
