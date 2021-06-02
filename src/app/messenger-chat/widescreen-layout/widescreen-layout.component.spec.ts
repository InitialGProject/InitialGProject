import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidescreenLayoutComponent } from './widescreen-layout.component';

describe('WidescreenLayoutComponent', () => {
  let component: WidescreenLayoutComponent;
  let fixture: ComponentFixture<WidescreenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidescreenLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidescreenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
