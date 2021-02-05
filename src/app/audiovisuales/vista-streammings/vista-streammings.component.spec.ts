import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaStreammingsComponent } from './vista-streammings.component';

describe('vista-streammingsComponent', () => {
  let component: VistaStreammingsComponent;
  let fixture: ComponentFixture<VistaStreammingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaStreammingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaStreammingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
