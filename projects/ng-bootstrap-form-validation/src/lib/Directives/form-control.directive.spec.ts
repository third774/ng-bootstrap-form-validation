import { NgForm } from "@angular/forms";
import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { FormControlDirective } from "./form-control.directive";

describe("FormControlDirective", () => {
  it("should create an instance", () => {
    const directive = new FormControlDirective(
      new NgForm([], []),
      BootstrapVersion.Four
    );
    expect(directive).toBeTruthy();
  });
});
