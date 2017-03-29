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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormGroupComponent = (function () {
    function FormGroupComponent(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.labelToken = "%%LABEL%%";
        this.defaultErrorMessages = [
            {
                error: 'required',
                message: this.labelToken + " is required"
            },
            {
                error: 'pattern',
                message: this.labelToken + " is invalid"
            },
            {
                error: 'minlength',
                format: function (error, label) {
                    return _this.labelToken + " must be at least " + error.requiredLength + " characters";
                }
            },
            {
                error: 'maxlength',
                format: function (error, label) {
                    return _this.labelToken + " must be no longer than " + error.requiredLength + " characters";
                }
            }
        ];
    }
    Object.defineProperty(FormGroupComponent.prototype, "label", {
        get: function () {
            var label = this.elRef.nativeElement.querySelector('label');
            return label ? label.textContent : 'This field';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "hasErrors", {
        get: function () {
            return this.FormControlNames.some(function (c) { return !c.valid && c.dirty && c.touched; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormGroupComponent.prototype, "hasSuccess", {
        get: function () {
            return !this.FormControlNames.some(function (c) { return !c.valid; }) && this.FormControlNames.some(function (c) { return c.dirty && c.touched; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormGroupComponent.prototype, "isDirtyAndTouched", {
        get: function () {
            return this.FormControlNames.some(function (c) { return c.dirty && c.touched; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "errorMessages", {
        get: function () {
            return this.customErrorMessages ? this.customErrorMessages.concat(this.defaultErrorMessages) : this.defaultErrorMessages;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormGroupComponent.prototype, "messages", {
        get: function () {
            var _this = this;
            var messages = [];
            if (!this.isDirtyAndTouched)
                return messages;
            this.FormControlNames.filter(function (c) { return !c.valid; }).forEach(function (control) {
                Object.keys(control.errors).forEach(function (key) {
                    var error = _this.errorMessages.find(function (error) { return error.error === key; });
                    if (!error)
                        return;
                    if (error.format) {
                        messages.push(error.format(control.errors[key], _this.label).replace(_this.labelToken, _this.label));
                    }
                    else {
                        messages.push(error.message.replace(_this.labelToken, _this.label));
                    }
                });
            });
            return messages;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChildren(forms_1.FormControlName), 
        __metadata('design:type', core_1.QueryList)
    ], FormGroupComponent.prototype, "FormControlNames", void 0);
    __decorate([
        core_1.HostBinding('class.has-error'), 
        __metadata('design:type', Object)
    ], FormGroupComponent.prototype, "hasErrors", null);
    __decorate([
        core_1.HostBinding('class.has-success'), 
        __metadata('design:type', Object)
    ], FormGroupComponent.prototype, "hasSuccess", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FormGroupComponent.prototype, "customErrorMessages", void 0);
    FormGroupComponent = __decorate([
        core_1.Component({
            selector: '.form-group',
            templateUrl: './form-group-component.html',
            styleUrls: ['./form-group-component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FormGroupComponent);
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;
//# sourceMappingURL=form-group-component.js.map