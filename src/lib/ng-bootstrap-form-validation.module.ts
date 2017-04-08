import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormGroupComponent} from "./Components/form-group-component/form-group-component";
import {FormValidationDirective} from "./Directives/form-validation.directive";
import {CommonModule} from "@angular/common";
import {ErrorMessage} from "./Models/ErrorMessage";
import {ErrorMessageService} from "./Services/error-message.service";
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
          useFactory: errorMessageService,
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

export function errorMessageService(customErrorMessages?: ErrorMessage[]) {
  return new ErrorMessageService(customErrorMessages);
}
