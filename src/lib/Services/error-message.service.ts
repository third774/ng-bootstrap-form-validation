import { Inject, Injectable } from "@angular/core";
import { ErrorMessage } from "../Models/ErrorMessage";
import { DEFAULT_ERRORS } from "../default-errors";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";

@Injectable()
export class ErrorMessageService {
  private defaultErrors = DEFAULT_ERRORS;

  public errorMessages: ErrorMessage[];

  constructor(
    @Inject(CUSTOM_ERROR_MESSAGES) public customErrorMessages: ErrorMessage[][]
  ) {
    this.errorMessages = customErrorMessages.reduce(
      (acc, cur) => acc.concat(cur),
      this.defaultErrors
    );
  }
}
