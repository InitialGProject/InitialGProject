import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidechatLayoutComponent } from './sidechat-layout.component';

describe('SidechatLayoutComponent', () => {
  let component: SidechatLayoutComponent;
  let fixture: ComponentFixture<SidechatLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidechatLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidechatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
