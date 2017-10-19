import { Inject, Injectable } from "@angular/core";
import { ErrorMessage } from "../Models/ErrorMessage";
import { DEFAULT_ERRORS } from "../default-errors";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";
import { FormControl } from "@angular/forms";

@Injectable()
export class ErrorMessageService {
  private defaultErrors = DEFAULT_ERRORS;

  constructor(@Inject(CUSTOM_ERROR_MESSAGES) public customErrorMessages: ErrorMessage[] = []) {}

  get errorMessages() {
    return [...this.customErrorMessages, ...this.defaultErrors];
  }

  private mergeErrorMessages(formControlCustomErrorMessages: ErrorMessage[]): ErrorMessage[] {
    return [...formControlCustomErrorMessages, ...this.customErrorMessages, ...this.defaultErrors];
  }

  public generateErrorMessages(
    formControl: FormControl,
    label: string,
    formControlErrorMessages: ErrorMessage[] = []
  ): string[] {
    if (formControl.valid) return [];
    const mergedErrorMessages = this.mergeErrorMessages(formControlErrorMessages);
    return Object.keys(formControl.errors).reduce((messages: string[], key: string) => {
      const error = mergedErrorMessages.find(errorMessage => errorMessage.error === key);
      if (!error) return messages;
      messages.push(error.format(label, formControl.errors[key]));
      return messages;
    }, []);
  }
}
