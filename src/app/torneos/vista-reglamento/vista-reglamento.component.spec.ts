import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReglamentoComponent } from './vista-reglamento.component';

describe('VistaReglamentoComponent', () => {
  let component: VistaReglamentoComponent;
  let fixture: ComponentFixture<VistaReglamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaReglamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaReglamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
