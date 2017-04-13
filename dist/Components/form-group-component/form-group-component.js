import { Component, ContentChildren, ElementRef, HostBinding, Input } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessageService } from "../../Services/error-message.service";
var FormGroupComponent = (function () {
    function FormGroupComponent(elRef, errorMessageService) {
        this.elRef = elRef;
        this.errorMessageService = errorMessageService;
        this.validationDisabled = false;
    }
    Object.defineProperty(FormGroupComponent.prototype, "hasErrors", {
        get: function () {
            return this.FormControlNames.some(function (c) { return !c.valid && c.dirty && c.touched; }) && !this.validationDisabled;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormGroupComponent.prototype, "hasSuccess", {
        get: function () {
            return !this.FormControlNames.some(function (c) { return !c.valid; }) && this.FormControlNames.some(function (c) { return c.dirty && c.touched; }) && !this.validationDisabled;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormGroupComponent.prototype, "label", {
        get: function () {
            var label = this.elRef.nativeElement.querySelector('label');
            return label && label.textContent ? label.textContent.trim() : 'This field';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "isDirtyAndTouched", {
        get: function () {
            return this.FormControlNames.some(function (c) { return c.dirty && c.touched; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "errorMessages", {
        get: function () {
            return this.customErrorMessages ? this.customErrorMessages.concat(this.errorMessageService.errorMessages) : this.errorMessageService.errorMessages;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormGroupComponent.prototype, "messages", {
        get: function () {
            var _this = this;
            var messages = [];
            if (!this.isDirtyAndTouched || this.validationDisabled)
                return messages;
            this.FormControlNames.filter(function (c) { return !c.valid; }).forEach(function (control) {
                Object.keys(control.errors).forEach(function (key) {
                    var error = _this.errorMessages.find(function (error) { return error.error === key; });
                    if (!error)
                        return;
                    messages.push(error.format(_this.label, control.errors[key]));
                });
            });
            return messages;
        },
        enumerable: true,
        configurable: true
    });
    return FormGroupComponent;
}());
export { FormGroupComponent };
FormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: '.form-group',
                template: "\n    <ng-content></ng-content>\n    <span class=\"help-block\" *ngFor=\"let message of messages\">{{message}}</span>\n  "
            },] },
];
/** @nocollapse */
FormGroupComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ErrorMessageService, },
]; };
FormGroupComponent.propDecorators = {
    'FormControlNames': [{ type: ContentChildren, args: [FormControlName,] },],
    'customErrorMessages': [{ type: Input },],
    'validationDisabled': [{ type: Input },],
    'hasErrors': [{ type: HostBinding, args: ['class.has-error',] },],
    'hasSuccess': [{ type: HostBinding, args: ['class.has-success',] },],
};
//# sourceMappingURL=form-group-component.js.map