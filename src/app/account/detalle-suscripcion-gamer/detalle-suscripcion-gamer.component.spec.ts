import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSuscripcionGamerComponent } from './detalle-suscripcion-gamer.component';

describe('DetalleSuscripcionGamerComponent', () => {
  let component: DetalleSuscripcionGamerComponent;
  let fixture: ComponentFixture<DetalleSuscripcionGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSuscripcionGamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSuscripcionGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
