import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormValidationDirective } from "./Directives/form-validation.directive";
import { FormControlDirective } from "./Directives";
import { FormGroupComponent } from "./Components";
import { MessagesComponent } from "./Components/messages/messages.component";
import { ErrorMessageService } from "./Services/error-message.service";
import { CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION } from "./Tokens/tokens";
import { NgBootstrapFormValidationModuleOptions } from "./Models";
import { BootstrapVersion } from "./Enums";
import { CommonModule } from "@angular/common";

const OPTIONS_DEFAULTS: NgBootstrapFormValidationModuleOptions = {
  customErrorMessages: [],
  bootstrapVersion: BootstrapVersion.Four
};

@NgModule({
  imports: [CommonModule],
  declarations: [
    FormValidationDirective,
    FormGroupComponent,
    MessagesComponent,
    FormControlDirective
  ],
  exports: [
    FormValidationDirective,
    FormGroupComponent,
    MessagesComponent,
    FormControlDirective
  ]
})
export class NgBootstrapFormValidationModule {
  static forRoot(
    userOptions?: NgBootstrapFormValidationModuleOptions
  ): ModuleWithProviders {
    const mergedOptions = {
      ...OPTIONS_DEFAULTS,
      ...userOptions
    };
    if (mergedOptions.customErrorMessages.length) {
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
          useValue: mergedOptions.customErrorMessages,
          multi: true
        },
        {
          provide: BOOTSTRAP_VERSION,
          useValue: mergedOptions.bootstrapVersion
        }
      ]
    };
  }
}
