import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenddevelopmentComponent } from './backenddevelopment.component';

describe('BackenddevelopmentComponent', () => {
  let component: BackenddevelopmentComponent;
  let fixture: ComponentFixture<BackenddevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackenddevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackenddevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
