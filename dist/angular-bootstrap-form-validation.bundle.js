(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var form_group_component_1 = require("./Components/form-group-component/form-group-component");
var form_validation_directive_1 = require("./Directives/form-validation.directive");
var common_1 = require("@angular/common");
var AngularBootstrapFormValidationModule = (function () {
    function AngularBootstrapFormValidationModule() {
    }
    AngularBootstrapFormValidationModule = __decorate([
        core_1.NgModule({
            declarations: [
                form_validation_directive_1.FormValidationDirective,
                form_group_component_1.FormGroupComponent
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                form_validation_directive_1.FormValidationDirective,
                form_group_component_1.FormGroupComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularBootstrapFormValidationModule);
    return AngularBootstrapFormValidationModule;
}());
exports.AngularBootstrapFormValidationModule = AngularBootstrapFormValidationModule;

})));
