import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormValidationDirective } from "./Directives/form-validation.directive";
import { FormGroupComponent } from "./Components/form-group-component/form-group-component";
import { MessagesComponent } from "./Components/messages/messages.component";
import { ErrorMessageService } from "./Services/error-message.service";
import {
  CUSTOM_ERROR_MESSAGES,
  NG_BOOTSTRAP_FORM_VALIDATION_MODULE_OPTIONS
} from "./Tokens/tokens";
import { NgBootstrapFormValidationModuleOptions } from "./Models/NgBootstrapFormValidationModuleOptions";
import { BootstrapVersion } from "./Enums/BootstrapVersion";

const OPTIONS_DEFAULTS: NgBootstrapFormValidationModuleOptions = {
  customErrorMessages: [],
  bootstrapVersion: BootstrapVersion.Four
};

@NgModule({
  declarations: [
    FormValidationDirective,
    FormGroupComponent,
    MessagesComponent
  ],
  imports: [CommonModule],
  exports: [FormValidationDirective, FormGroupComponent, MessagesComponent]
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
          provide: NG_BOOTSTRAP_FORM_VALIDATION_MODULE_OPTIONS,
          useValue: mergedOptions,
          multi: false
        }
      ]
    };
  }
}
