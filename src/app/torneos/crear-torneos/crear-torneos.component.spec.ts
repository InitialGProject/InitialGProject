import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTorneosComponent } from './crear-torneos.component';

describe('CrearTorneosComponent', () => {
  let component: CrearTorneosComponent;
  let fixture: ComponentFixture<CrearTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTorneosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
