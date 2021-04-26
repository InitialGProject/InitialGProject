import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTiendaComponent } from './inicio-tienda.component';

describe('InicioTiendaComponent', () => {
  let component: InicioTiendaComponent;
  let fixture: ComponentFixture<InicioTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
