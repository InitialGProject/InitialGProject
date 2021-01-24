import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoRetroComponent } from './torneo-retro.component';

describe('TorneoRetroComponent', () => {
  let component: TorneoRetroComponent;
  let fixture: ComponentFixture<TorneoRetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoRetroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
