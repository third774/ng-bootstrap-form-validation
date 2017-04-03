import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDemoComponent } from './reactive-form-demo.component';

describe('ReactiveFormDemoComponent', () => {
  let component: ReactiveFormDemoComponent;
  let fixture: ComponentFixture<ReactiveFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
