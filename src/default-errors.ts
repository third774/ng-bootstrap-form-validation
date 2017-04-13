import {ErrorMessage} from "./Models/ErrorMessage";

export const DEFAULT_ERRORS: ErrorMessage[] = [
  {
    error: 'required',
    format: label => `${label} is required`
  },
  {
    error: 'pattern',
    format: label => `${label} is invalid`
  },
  {
    error: 'minlength',
    format: (label, error) => `${label} must be at least ${error.requiredLength} characters`
  },
  {
    error: 'maxlength',
    format: (label, error) => `${label} must be no longer than ${error.requiredLength} characters`
  },
  {
    error: 'requiredTrue',
    format: (label, error) => `${label} is required`
  },
  {
    error: 'email',
    format: (label, error) => `Invalid email address`
  }
];
