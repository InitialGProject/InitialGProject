import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vista-streammingsComponent } from './vista-streammings.component';

describe('vista-streammingsComponent', () => {
  let component: vista-streammingsComponent;
  let fixture: ComponentFixture<vista-streammingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vista-streammingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vista-streammingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
