import { Inject, Injectable } from "@angular/core";
import { DEFAULT_ERRORS } from "../default-errors";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";
var ErrorMessageService = (function () {
    function ErrorMessageService(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = DEFAULT_ERRORS;
    }
    Object.defineProperty(ErrorMessageService.prototype, "errorMessages", {
        get: function () {
            return this.customErrorMessages ? this.customErrorMessages.concat(this.defaultErrors) : this.defaultErrors;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorMessageService;
}());
export { ErrorMessageService };
ErrorMessageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ErrorMessageService.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] },] },
]; };
//# sourceMappingURL=error-message.service.js.map