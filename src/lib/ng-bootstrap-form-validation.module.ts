import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormValidationDirective} from "./Directives/form-validation.directive";
import {FormGroupComponent} from "./Components/form-group-component/form-group-component";
import {ErrorMessageService} from "./Services/error-message.service";
import {ErrorMessage} from "./Models/ErrorMessage";
import {CUSTOM_ERROR_MESSAGES} from "./Tokens/tokens";



@NgModule({
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
})
export class NgBootstrapFormValidationModule {
  static forRoot(customErrorMessages?: ErrorMessage[]): ModuleWithProviders {
    return {
      ngModule: NgBootstrapFormValidationModule,
      providers: [
        {
          provide: ErrorMessageService,
          useFactory: errorMessageServiceFactory,
          deps: [CUSTOM_ERROR_MESSAGES]
        },
        {
          provide: CUSTOM_ERROR_MESSAGES,
          useValue: customErrorMessages
        }
      ]
    };
  }
}

export function errorMessageServiceFactory(customErrorMessages?: ErrorMessage[]) {
  return new ErrorMessageService(customErrorMessages);
}
