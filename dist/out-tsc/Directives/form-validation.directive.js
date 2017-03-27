"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormValidationDirective = (function () {
    function FormValidationDirective() {
        this.validSubmit = new core_1.EventEmitter();
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
            if (formGroup.controls[key] instanceof forms_1.FormGroup) {
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
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], FormValidationDirective.prototype, "formGroup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormValidationDirective.prototype, "validSubmit", void 0);
__decorate([
    core_1.HostListener("submit"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormValidationDirective.prototype, "onSubmit", null);
FormValidationDirective = __decorate([
    core_1.Directive({
        selector: "form"
    }),
    __metadata("design:paramtypes", [])
], FormValidationDirective);
exports.FormValidationDirective = FormValidationDirective;
//# sourceMappingURL=form-validation.directive.js.map