import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CUSTOM_ERROR_MESSAGES } from './Tokens';
import { ErrorMessageService } from './Services';
import { FormGroupComponent } from './Components';
import { FormValidationDirective } from './Directives';
var NgBootstrapFormValidationModule = (function () {
    function NgBootstrapFormValidationModule() {
    }
    NgBootstrapFormValidationModule.forRoot = function (customErrorMessages) {
        return {
            ngModule: NgBootstrapFormValidationModule,
            providers: [
                {
                    provide: ErrorMessageService,
                    useFactory: errorMessageService,
                    deps: [CUSTOM_ERROR_MESSAGES]
                },
                {
                    provide: CUSTOM_ERROR_MESSAGES,
                    useValue: customErrorMessages
                }
            ]
        };
    };
    return NgBootstrapFormValidationModule;
}());
export { NgBootstrapFormValidationModule };
NgBootstrapFormValidationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FormValidationDirective,
                    FormGroupComponent
                ],
                imports: [
                    CommonModule
                ],
                providers: [
                    ErrorMessageService
                ],
                exports: [
                    FormValidationDirective,
                    FormGroupComponent
                ]
            },] },
];
/** @nocollapse */
NgBootstrapFormValidationModule.ctorParameters = function () { return []; };
export function errorMessageService(customErrorMessages) {
    return new ErrorMessageService(customErrorMessages);
}
//# sourceMappingURL=ng-bootstrap-form-validation.module.js.map