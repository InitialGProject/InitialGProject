import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTorneosComponent } from './detalle-torneos.component';

describe('DetalleTorneosComponent', () => {
  let component: DetalleTorneosComponent;
  let fixture: ComponentFixture<DetalleTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTorneosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
