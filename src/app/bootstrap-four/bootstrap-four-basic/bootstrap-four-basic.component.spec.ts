import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapFourBasicComponent } from "./bootstrap-four-basic.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgBootstrapFormValidationModule } from "projects/ng-bootstrap-form-validation/src/public_api";

describe("BootstrapFourBasicComponent", () => {
  let component: BootstrapFourBasicComponent;
  let fixture: ComponentFixture<BootstrapFourBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgBootstrapFormValidationModule.forRoot()
      ],
      declarations: [BootstrapFourBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFourBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
