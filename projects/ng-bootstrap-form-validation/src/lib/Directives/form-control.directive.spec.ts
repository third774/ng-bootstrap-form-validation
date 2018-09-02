import { BootstrapVersion } from "./../Enums/bootstrap-version.enum";
import { FormControlDirective } from "./form-control.directive";

describe("FormControlDirective", () => {
  it("should create an Bootstrap Version 4 instance", () => {
    const directive = new FormControlDirective(null, BootstrapVersion.Four);
    expect(directive).toBeTruthy();
  });

  it("should create an Bootstrap Version 3 instance", () => {
    const directive = new FormControlDirective(null, BootstrapVersion.Three);
    expect(directive).toBeTruthy();
  });
});
