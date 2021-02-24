import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSuscripcionBasicaComponent } from './detalle-suscripcion-basica.component';

describe('DetalleSuscripcionBasicaComponent', () => {
  let component: DetalleSuscripcionBasicaComponent;
  let fixture: ComponentFixture<DetalleSuscripcionBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSuscripcionBasicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSuscripcionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
