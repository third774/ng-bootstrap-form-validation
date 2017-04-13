import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CUSTOM_ERROR_MESSAGES } from './Tokens';
import { ErrorMessage } from './Models';
import { ErrorMessageService } from './Services';
import { FormGroupComponent } from './Components';
import { FormValidationDirective } from './Directives';

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
