import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorsComponent } from './custom-errors.component';

describe('CustomErrorsComponent', () => {
  let component: CustomErrorsComponent;
  let fixture: ComponentFixture<CustomErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
