import { NgModule, ModuleWithProviders } from "@angular/core";
import { ErrorMessage } from "./Models";
import { ErrorMessageService } from "./Services";
import { CUSTOM_ERROR_MESSAGES } from "./Tokens/tokens";
import { CommonModule } from "@angular/common";
import { FormGroupComponent, MessagesComponent } from "./Components";
import { FormValidationDirective } from "./Directives";

@NgModule({
  imports: [CommonModule],
  declarations: [
    FormGroupComponent,
    MessagesComponent,
    FormValidationDirective
  ],
  exports: [FormValidationDirective, FormGroupComponent, MessagesComponent]
})
export class NgBootstrapFormValidationModule {
  static forRoot(
    customErrorMessages: ErrorMessage[] = []
  ): ModuleWithProviders {
    if (customErrorMessages.length) {
      console.warn(
        "Deprecation warning: Passing 'customErrorMessages' to " +
          "the 'forRoot' method is deprecated and will be removed in a future " +
          "release. Please use the 'CUSTOM_ERROR_MESSAGES' multi-provider, see: " +
          "https://github.com/third774/ng-bootstrap-form-validation#module-level-custom-errors"
      );
    }

    return {
      ngModule: NgBootstrapFormValidationModule,
      providers: [
        ErrorMessageService,
        {
          provide: CUSTOM_ERROR_MESSAGES,
          useValue: customErrorMessages,
          multi: true
        }
      ]
    };
  }
}
