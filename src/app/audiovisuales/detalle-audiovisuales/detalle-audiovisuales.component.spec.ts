import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAudiovisualesComponent } from './detalle-audiovisuales.component';

describe('DetalleAudiovisualesComponent', () => {
  let component: DetalleAudiovisualesComponent;
  let fixture: ComponentFixture<DetalleAudiovisualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAudiovisualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAudiovisualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
