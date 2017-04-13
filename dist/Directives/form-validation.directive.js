import { Directive, Input, HostListener, EventEmitter, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
var FormValidationDirective = (function () {
    function FormValidationDirective() {
        this.validSubmit = new EventEmitter();
    }
    FormValidationDirective.prototype.onSubmit = function () {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    };
    FormValidationDirective.prototype.markAsTouchedAndDirty = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (key) {
            if (formGroup.controls[key] instanceof FormGroup) {
                _this.markAsTouchedAndDirty(formGroup.controls[key]);
            }
            else {
                formGroup.controls[key].markAsDirty();
                formGroup.controls[key].markAsTouched();
                formGroup.controls[key].updateValueAndValidity();
            }
        });
    };
    FormValidationDirective.prototype.ngOnInit = function () {
    };
    return FormValidationDirective;
}());
export { FormValidationDirective };
FormValidationDirective.decorators = [
    { type: Directive, args: [{
                selector: "form"
            },] },
];
/** @nocollapse */
FormValidationDirective.ctorParameters = function () { return []; };
FormValidationDirective.propDecorators = {
    'formGroup': [{ type: Input },],
    'validSubmit': [{ type: Output },],
    'onSubmit': [{ type: HostListener, args: ["submit",] },],
};
//# sourceMappingURL=form-validation.directive.js.map