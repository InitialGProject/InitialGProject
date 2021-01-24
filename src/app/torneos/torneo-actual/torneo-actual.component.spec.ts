import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoActualComponent } from './torneo-actual.component';

describe('TorneoActualComponent', () => {
  let component: TorneoActualComponent;
  let fixture: ComponentFixture<TorneoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
