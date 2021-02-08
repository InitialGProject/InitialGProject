import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActualComponent } from './detalle-actual.component';

describe('DetalleActualComponent', () => {
  let component: DetalleActualComponent;
  let fixture: ComponentFixture<DetalleActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
