import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontenddevelopmentComponent } from './frontenddevelopment.component';

describe('FrontenddevelopmentComponent', () => {
  let component: FrontenddevelopmentComponent;
  let fixture: ComponentFixture<FrontenddevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontenddevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontenddevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
