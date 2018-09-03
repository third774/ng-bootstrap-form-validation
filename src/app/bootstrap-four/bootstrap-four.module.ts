import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BootstrapFourNavComponent } from "./bootstrap-four-nav/bootstrap-four-nav.component";
import { BootstrapFourBasicComponent } from "./bootstrap-four-basic/bootstrap-four-basic.component";
import { BootstrapFourComponent } from "./bootstrap-four.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BootstrapFourRoutingModule } from "./bootstrap-four-routing.module";
import { NgBootstrapFormValidationModule } from "../../../projects/ng-bootstrap-form-validation/src/lib/ng-bootstrap-form-validation.module";
import { BOOTSTRAP_VERSION } from "../../../projects/ng-bootstrap-form-validation/src/lib/Tokens/tokens";
import { BootstrapVersion } from "../../../projects/ng-bootstrap-form-validation/src/lib/Enums/BootstrapVersion";

@NgModule({
  imports: [
    CommonModule,
    NgBootstrapFormValidationModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapFourRoutingModule
  ],
  declarations: [
    BootstrapFourNavComponent,
    BootstrapFourComponent,
    BootstrapFourBasicComponent
  ],
  exports: [
    BootstrapFourNavComponent,
    BootstrapFourBasicComponent,
    BootstrapFourComponent
  ],
  providers: [
    {
      provide: BOOTSTRAP_VERSION,
      useValue: BootstrapVersion.Four
    }
  ]
})
export class BootstrapFourModule {}
