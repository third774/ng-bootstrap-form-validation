import { RouterTestingModule } from "@angular/router/testing";
import {
  NgBootstrapFormValidationModule,
  BOOTSTRAP_VERSION,
  BootstrapVersion
} from "ng-bootstrap-form-validation";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapFourBasicComponent } from "./bootstrap-four-basic.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

describe("BootstrapFourBasicComponent", () => {
  let component: BootstrapFourBasicComponent;
  let fixture: ComponentFixture<BootstrapFourBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        NgBootstrapFormValidationModule.forRoot()
      ],
      declarations: [BootstrapFourBasicComponent],
      providers: [
        {
          provide: BOOTSTRAP_VERSION,
          useValue: BootstrapVersion.Four
        }
      ]
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
