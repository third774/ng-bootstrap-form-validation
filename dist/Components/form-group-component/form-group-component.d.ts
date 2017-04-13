import { ElementRef, QueryList } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessage } from "../../Models/ErrorMessage";
import { ErrorMessageService } from "../../Services/error-message.service";
export declare class FormGroupComponent {
    private elRef;
    private errorMessageService;
    FormControlNames: QueryList<FormControlName>;
    customErrorMessages: ErrorMessage[];
    validationDisabled: boolean;
    readonly hasErrors: boolean;
    readonly hasSuccess: boolean;
    constructor(elRef: ElementRef, errorMessageService: ErrorMessageService);
    readonly label: any;
    readonly isDirtyAndTouched: boolean;
    readonly errorMessages: ErrorMessage[];
    readonly messages: string[];
}
