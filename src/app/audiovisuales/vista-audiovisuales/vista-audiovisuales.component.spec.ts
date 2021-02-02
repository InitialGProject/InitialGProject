import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAudiovisualesComponent } from './vista-audiovisuales.component';


describe('VistaAudiovisualesComponent', () => {
  let component: VistaAudiovisualesComponent;
  let fixture: ComponentFixture<VistaAudiovisualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAudiovisualesComponent ]
    })
    .compileComponents();
  });

  

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAudiovisualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
