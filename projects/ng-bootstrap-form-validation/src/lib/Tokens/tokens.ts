import { InjectionToken } from "@angular/core";
import { ErrorMessage } from "../Models";

export const CUSTOM_ERROR_MESSAGES = new InjectionToken<ErrorMessage[]>(
  "ng-bootstrap-form-validation custom error messages"
);
