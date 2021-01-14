import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaForoComponent } from './vista-foro.component';

describe('VistaForoComponent', () => {
  let component: VistaForoComponent;
  let fixture: ComponentFixture<VistaForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaForoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
