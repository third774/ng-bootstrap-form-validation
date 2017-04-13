import { ModuleWithProviders } from '@angular/core';
import { ErrorMessage } from './Models';
import { ErrorMessageService } from './Services';
export declare class NgBootstrapFormValidationModule {
    static forRoot(customErrorMessages?: ErrorMessage[]): ModuleWithProviders;
}
export declare function errorMessageService(customErrorMessages?: ErrorMessage[]): ErrorMessageService;
