(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng-bootstrap-form-validation"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["ng-bootstrap-form-validation"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_errors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tokens_tokens__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ErrorMessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ErrorMessageService = (function () {
    function ErrorMessageService(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = __WEBPACK_IMPORTED_MODULE_1__default_errors__["a" /* DEFAULT_ERRORS */];
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
ErrorMessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__Tokens_tokens__["a" /* CUSTOM_ERROR_MESSAGES */])),
    __metadata("design:paramtypes", [Array])
], ErrorMessageService);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CUSTOM_ERROR_MESSAGES; });

var CUSTOM_ERROR_MESSAGES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('ng-bootstrap-form-validation custom error messages');


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tokens__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Directives__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgBootstrapFormValidationModule; });
/* harmony export (immutable) */ exports["b"] = errorMessageService;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NgBootstrapFormValidationModule = NgBootstrapFormValidationModule_1 = (function () {
    function NgBootstrapFormValidationModule() {
    }
    NgBootstrapFormValidationModule.forRoot = function (customErrorMessages) {
        return {
            ngModule: NgBootstrapFormValidationModule_1,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__Services__["a" /* ErrorMessageService */],
                    useFactory: errorMessageService,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__Tokens__["a" /* CUSTOM_ERROR_MESSAGES */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__Tokens__["a" /* CUSTOM_ERROR_MESSAGES */],
                    useValue: customErrorMessages
                }
            ]
        };
    };
    return NgBootstrapFormValidationModule;
}());
NgBootstrapFormValidationModule = NgBootstrapFormValidationModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__Directives__["a" /* FormValidationDirective */],
            __WEBPACK_IMPORTED_MODULE_4__Components__["a" /* FormGroupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__Services__["a" /* ErrorMessageService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__Directives__["a" /* FormValidationDirective */],
            __WEBPACK_IMPORTED_MODULE_4__Components__["a" /* FormGroupComponent */]
        ]
    })
], NgBootstrapFormValidationModule);

function errorMessageService(customErrorMessages) {
    return new __WEBPACK_IMPORTED_MODULE_3__Services__["a" /* ErrorMessageService */](customErrorMessages);
}
var NgBootstrapFormValidationModule_1;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_error_message_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
            return label ? label.textContent : 'This field';
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControlName"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], FormGroupComponent.prototype, "FormControlNames", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FormGroupComponent.prototype, "customErrorMessages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FormGroupComponent.prototype, "validationDisabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.has-error'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FormGroupComponent.prototype, "hasErrors", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.has-success'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FormGroupComponent.prototype, "hasSuccess", null);
FormGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '.form-group',
        template: "\n    <ng-content></ng-content>\n    <span class=\"help-block\" *ngFor=\"let message of messages\">{{message}}</span>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__Services_error_message_service__["a" /* ErrorMessageService */]])
], FormGroupComponent);



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_group_component_form_group_component__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__form_group_component_form_group_component__["a"]; });



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormValidationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormValidationDirective = (function () {
    function FormValidationDirective() {
        this.validSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
            if (formGroup.controls[key] instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
], FormValidationDirective.prototype, "formGroup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormValidationDirective.prototype, "validSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("submit"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormValidationDirective.prototype, "onSubmit", null);
FormValidationDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "form"
    }),
    __metadata("design:paramtypes", [])
], FormValidationDirective);



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_validation_directive__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__form_validation_directive__["a"]; });



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_message_service__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__error_message_service__["a"]; });



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tokens__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tokens__["a"]; });



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DEFAULT_ERRORS; });
var DEFAULT_ERRORS = [
    {
        error: 'required',
        format: function (label) { return label + " is required"; }
    },
    {
        error: 'pattern',
        format: function (label) { return label + " is invalid"; }
    },
    {
        error: 'minlength',
        format: function (label, error) { return label + " must be at least " + error.requiredLength + " characters"; }
    },
    {
        error: 'maxlength',
        format: function (label, error) { return label + " must be no longer than " + error.requiredLength + " characters"; }
    },
    {
        error: 'requiredTrue',
        format: function (label, error) { return label + " is required"; }
    },
    {
        error: 'email',
        format: function (label, error) { return "Invalid email address"; }
    }
];


/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_form_validation_module__ = __webpack_require__(4);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NgBootstrapFormValidationModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_form_validation_module__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "errorMessageService", function() { return __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_form_validation_module__["b"]; });



/***/ }
/******/ ]);
});
//# sourceMappingURL=ng-bootstrap-form-validation.bundle.js.map