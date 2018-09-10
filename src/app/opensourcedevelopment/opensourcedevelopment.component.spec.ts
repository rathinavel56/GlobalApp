import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensourcedevelopmentComponent } from './opensourcedevelopment.component';

describe('OpensourcedevelopmentComponent', () => {
  let component: OpensourcedevelopmentComponent;
  let fixture: ComponentFixture<OpensourcedevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpensourcedevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpensourcedevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
