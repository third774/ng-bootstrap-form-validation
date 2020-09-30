import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormValidationDirective } from "./Directives/form-validation.directive";
import { MessagesComponent } from "./Components/messages/messages.component";
import { ErrorMessageService } from "./Services/error-message.service";
import { CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION } from "./Tokens/tokens";
import { BootstrapVersion } from "./Enums/BootstrapVersion";
import { FormGroupComponent } from "./Components/form-group/form-group.component";
import { NgBootstrapFormValidationModuleOptions } from "./Models/NgBootstrapFormValidationModuleOptions";
import { FormControlDirective } from "./Directives/form-control.directive";

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
    userOptions: NgBootstrapFormValidationModuleOptions = {
      bootstrapVersion: BootstrapVersion.Four
    }
  ): ModuleWithProviders<NgBootstrapFormValidationModule> {
    return {
      ngModule: NgBootstrapFormValidationModule,
      providers: [
        {
          provide: CUSTOM_ERROR_MESSAGES,
          useValue: userOptions.customErrorMessages || [],
          multi: true
        },
        {
          provide: BOOTSTRAP_VERSION,
          useValue: userOptions.bootstrapVersion
        },
        ErrorMessageService
      ]
    };
  }
}
