import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormGroupComponent } from "./form-group.component";
import { MockComponent } from "ng2-mock-component";
import { ErrorMessageService } from "../../Services";
import { CUSTOM_ERROR_MESSAGES } from "../../Tokens/tokens";

describe("FormGroupComponent", () => {
  let component: FormGroupComponent;
  let fixture: ComponentFixture<FormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormGroupComponent,
        MockComponent({
          selector: "bfv-messages",
          inputs: ["messages"]
        })
      ],
      providers: [
        ErrorMessageService,
        {
          provide: CUSTOM_ERROR_MESSAGES,
          useValue: [],
          multi: true
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
