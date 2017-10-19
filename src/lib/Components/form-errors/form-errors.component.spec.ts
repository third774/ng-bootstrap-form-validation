import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormErrorsComponent } from "./form-errors.component";

describe("FormErrorsComponent", () => {
  let component: FormErrorsComponent;
  let fixture: ComponentFixture<FormErrorsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormErrorsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
