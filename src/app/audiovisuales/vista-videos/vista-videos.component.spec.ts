import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVideosComponent } from './vista-videos.component';

describe('VideosComponent', () => {
  let component: VistaVideosComponent;
  let fixture: ComponentFixture<VistaVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
