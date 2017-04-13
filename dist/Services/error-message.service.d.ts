import { ErrorMessage } from "../Models/ErrorMessage";
export declare class ErrorMessageService {
    customErrorMessages: ErrorMessage[];
    private defaultErrors;
    constructor(customErrorMessages?: ErrorMessage[]);
    readonly errorMessages: ErrorMessage[];
}
