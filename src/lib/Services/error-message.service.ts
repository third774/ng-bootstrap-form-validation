import {Injectable, Optional} from "@angular/core";
import {ErrorMessage} from "../Models/ErrorMessage";
import {DEFAULT_ERRORS} from "../default-errors";

@Injectable()
export class ErrorMessageService {

  private defaultErrors = DEFAULT_ERRORS;

  constructor(@Optional() public customErrorMessages?: ErrorMessage[]) {
  }

  get errorMessages() {
    return this.customErrorMessages ? this.customErrorMessages.concat(this.defaultErrors) : this.defaultErrors;
  }

}
