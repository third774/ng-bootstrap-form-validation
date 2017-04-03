import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormGroupComponent} from "./Components/form-group-component/form-group-component";
import {FormValidationDirective} from "./Directives/form-validation.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    FormValidationDirective,
    FormGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormValidationDirective,
    FormGroupComponent
  ]
})
export class AngularBootstrapFormValidationModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: AngularBootstrapFormValidationModule, providers: []};
  }
}
