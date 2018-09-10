import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstrengthComponent } from './ourstrength.component';

describe('OurstrengthComponent', () => {
  let component: OurstrengthComponent;
  let fixture: ComponentFixture<OurstrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurstrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurstrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
