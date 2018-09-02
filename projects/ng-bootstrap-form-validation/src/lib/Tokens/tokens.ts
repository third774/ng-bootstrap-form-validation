import { InjectionToken } from "@angular/core";
import { ErrorMessage } from "../Models";
import { BootstrapVersion } from "../Enums";

export const CUSTOM_ERROR_MESSAGES = new InjectionToken<ErrorMessage[]>(
  "ng-bootstrap-form-validation custom error messages"
);

export const BOOTSTRAP_VERSION = new InjectionToken<BootstrapVersion>(
  "ng-bootstrap-form-validation module options"
);
