import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJuegosComponent } from './detalle-juegos.component';

describe('DetalleJuegosComponent', () => {
  let component: DetalleJuegosComponent;
  let fixture: ComponentFixture<DetalleJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
