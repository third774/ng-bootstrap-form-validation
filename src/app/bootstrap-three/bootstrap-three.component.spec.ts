import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapThreeComponent } from "./bootstrap-three.component";
import { BootstrapThreeNavComponent } from "./bootstrap-three-nav/bootstrap-three-nav.component";
import { DefaultErrorsDemoComponent } from "./default-errors-demo/default-errors-demo.component";

describe("BootstrapThreeComponent", () => {
  let component: BootstrapThreeComponent;
  let fixture: ComponentFixture<BootstrapThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [
        BootstrapThreeComponent,
        BootstrapThreeNavComponent,
        DefaultErrorsDemoComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
