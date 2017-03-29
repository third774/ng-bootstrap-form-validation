import { ElementRef, QueryList } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessage } from "../../Models/ErrorMessage";
export declare class FormGroupComponent {
    private elRef;
    FormControlNames: QueryList<FormControlName>;
    constructor(elRef: ElementRef);
    readonly label: any;
    labelToken: string;
    readonly hasErrors: boolean;
    readonly hasSuccess: boolean;
    readonly isDirtyAndTouched: boolean;
    customErrorMessages: ErrorMessage[];
    readonly errorMessages: ErrorMessage[];
    readonly messages: string[];
    defaultErrorMessages: ErrorMessage[];
}
