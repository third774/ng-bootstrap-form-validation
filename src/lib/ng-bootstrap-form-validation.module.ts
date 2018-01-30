import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormValidationDirective } from "./Directives/form-validation.directive";
import { FormGroupComponent } from "./Components/form-group-component/form-group-component";
import { MessagesComponent } from "./Components/messages/messages.component";
import { ErrorMessageService } from "./Services/error-message.service";
import { ErrorMessage } from "./Models/ErrorMessage";
import { CUSTOM_ERROR_MESSAGES } from "./Tokens/tokens";

@NgModule({
  declarations: [
    FormValidationDirective,
    FormGroupComponent,
    MessagesComponent
  ],
  imports: [CommonModule],
  providers: [ErrorMessageService],
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
          "release. Please use the 'CUSTOM_ERROR_MESSAGES' multi-provider."
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
