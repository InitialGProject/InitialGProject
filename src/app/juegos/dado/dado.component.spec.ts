import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoComponent } from './dado.component';

describe('DadoComponent', () => {
  let component: DadoComponent;
  let fixture: ComponentFixture<DadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
