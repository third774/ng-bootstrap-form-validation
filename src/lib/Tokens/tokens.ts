import { InjectionToken } from "@angular/core";
import { ErrorMessage } from "../Models/ErrorMessage";
import { NgBootstrapFormValidationModuleOptions } from "../Models/NgBootstrapFormValidationModuleOptions";

export const CUSTOM_ERROR_MESSAGES = new InjectionToken<ErrorMessage[]>(
  "ng-bootstrap-form-validation custom error messages"
);

export const NG_BOOTSTRAP_FORM_VALIDATION_MODULE_OPTIONS = new InjectionToken<
  NgBootstrapFormValidationModuleOptions
>("ng-bootstrap-form-validation module options");
