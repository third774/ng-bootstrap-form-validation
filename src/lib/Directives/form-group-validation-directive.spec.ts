import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroupValidationDirective } from "./form-group-validation-directive";
import { ErrorMessageService } from "../Services/error-message.service";
import { errorMessageServiceFactory } from "../ng-bootstrap-form-validation.module";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";

describe("FormGroupComponent", () => {
  let component: FormGroupValidationDirective;
  let fixture: ComponentFixture<FormGroupValidationDirective>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormGroupValidationDirective],
        providers: [
          {
            provide: ErrorMessageService,
            useFactory: errorMessageServiceFactory,
            deps: [CUSTOM_ERROR_MESSAGES]
          },
          {
            provide: CUSTOM_ERROR_MESSAGES,
            useValue: []
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupValidationDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
