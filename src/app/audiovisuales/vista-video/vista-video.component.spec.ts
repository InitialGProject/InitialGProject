import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVideoComponent } from './vista-video.component';


describe('VistaVideoComponent', () => {
  let component: VistaVideoComponent;
  let fixture: ComponentFixture<VistaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaVideoComponent ]
    })
    .compileComponents();
  });

  

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
