import { FormControlDirective } from "./form-control.directive";
import { ControlContainer } from "@angular/forms";
import { BootstrapVersion } from "../../public_api";

describe("FormControlDirective", () => {
  it("should create an instance", () => {
    const directive = new FormControlDirective(null, BootstrapVersion.Three);
    expect(directive).toBeTruthy();
  });
});
