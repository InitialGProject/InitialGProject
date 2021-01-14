import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreammingsComponent } from './streammings.component';

describe('StreammingsComponent', () => {
  let component: StreammingsComponent;
  let fixture: ComponentFixture<StreammingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreammingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreammingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
