import {Inject, Injectable} from "@angular/core";
import {ErrorMessage} from "../Models/ErrorMessage";
import {DEFAULT_ERRORS} from "../default-errors";
import {CUSTOM_ERROR_MESSAGES} from "../Tokens/tokens";

@Injectable()
export class ErrorMessageService {

  private defaultErrors = DEFAULT_ERRORS;

  constructor(@Inject(CUSTOM_ERROR_MESSAGES) public customErrorMessages?: ErrorMessage[]) {
  }

  get errorMessages() {
    return this.customErrorMessages ? this.customErrorMessages.concat(this.defaultErrors) : this.defaultErrors;
  }

}
