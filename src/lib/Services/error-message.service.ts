import { Inject, Injectable } from "@angular/core";
import { ErrorMessage } from "../Models/ErrorMessage";
import { DEFAULT_ERRORS } from "../default-errors";
import { CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION } from "../Tokens/tokens";
import { BootstrapVersion } from "../Enums/BootstrapVersion";

@Injectable()
export class ErrorMessageService {
  private defaultErrors = DEFAULT_ERRORS;

  public errorMessages: ErrorMessage[];

  constructor(
    @Inject(CUSTOM_ERROR_MESSAGES) public customErrorMessages: ErrorMessage[][],
    @Inject(BOOTSTRAP_VERSION) public bootstrapVersion: BootstrapVersion
  ) {
    console.log(bootstrapVersion);
    this.errorMessages = customErrorMessages.reduce(
      (acc, cur) => acc.concat(cur),
      this.defaultErrors
    );
  }

  get errorClassName() {
    switch (this.bootstrapVersion[0]) {
      case BootstrapVersion.Three:
        return "help-block";
      case BootstrapVersion.Four:
        return "invalid-feedback";
    }
  }
}
