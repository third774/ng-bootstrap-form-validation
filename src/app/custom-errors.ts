import {ErrorMessage} from "../lib/Models/ErrorMessage";

export const CUSTOM_ERRORS: ErrorMessage[] = [
  {
    error: 'required',
    format: (label, error) => `${label.toUpperCase()} IS REQUIRED!!!`
  }, {
    error: 'minlength',
    format: (label, error) => `${label.toUpperCase()} IS NOT LONG ENOUGH! MUST BE AT LEAST ${error.requiredLength} CHARACTERS`
  }
];
