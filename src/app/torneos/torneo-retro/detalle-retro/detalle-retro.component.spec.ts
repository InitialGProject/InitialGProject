import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRetroComponent } from './detalle-retro.component';

describe('DetalleRetroComponent', () => {
  let component: DetalleRetroComponent;
  let fixture: ComponentFixture<DetalleRetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRetroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
