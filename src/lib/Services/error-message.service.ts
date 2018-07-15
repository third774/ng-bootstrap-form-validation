import { Inject, Injectable } from "@angular/core";
import { ErrorMessage } from "../Models/ErrorMessage";
import { DEFAULT_ERRORS } from "../default-errors";
import {
  CUSTOM_ERROR_MESSAGES,
  NG_BOOTSTRAP_FORM_VALIDATION_MODULE_OPTIONS
} from "../Tokens/tokens";
import { NgBootstrapFormValidationModuleOptions } from "../Models/NgBootstrapFormValidationModuleOptions";
import { BootstrapVersion } from "../Enums/BootstrapVersion";

@Injectable()
export class ErrorMessageService {
  private defaultErrors = DEFAULT_ERRORS;

  public errorMessages: ErrorMessage[];

  constructor(
    @Inject(CUSTOM_ERROR_MESSAGES) public customErrorMessages: ErrorMessage[][],
    @Inject(NG_BOOTSTRAP_FORM_VALIDATION_MODULE_OPTIONS)
    public moduleOptions: NgBootstrapFormValidationModuleOptions
  ) {
    this.errorMessages = customErrorMessages.reduce(
      (acc, cur) => acc.concat(cur),
      this.defaultErrors
    );
  }

  get errorClassName() {
    switch (this.moduleOptions.bootstrapVersion) {
      case BootstrapVersion.Three:
        return "help-block";
      case BootstrapVersion.Four:
        return "invalid-feedback";
    }
  }
}
