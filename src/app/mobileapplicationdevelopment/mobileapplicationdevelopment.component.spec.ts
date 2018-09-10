import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileapplicationdevelopmentComponent } from './mobileapplicationdevelopment.component';

describe('MobileapplicationdevelopmentComponent', () => {
  let component: MobileapplicationdevelopmentComponent;
  let fixture: ComponentFixture<MobileapplicationdevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileapplicationdevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileapplicationdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
