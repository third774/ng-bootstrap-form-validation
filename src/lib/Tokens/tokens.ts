import {InjectionToken} from "@angular/core";
import {ErrorMessage} from "../Models/ErrorMessage";


export const CUSTOM_ERROR_MESSAGES = new InjectionToken<ErrorMessage[]>('ng-bootstrap-form-validation custom error messages');
