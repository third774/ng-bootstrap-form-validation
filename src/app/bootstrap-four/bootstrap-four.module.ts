import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BootstrapFourNavComponent } from "./bootstrap-four-nav/bootstrap-four-nav.component";
import { BootstrapFourBasicComponent } from "./bootstrap-four-basic/bootstrap-four-basic.component";
import { BootstrapFourComponent } from "./bootstrap-four.component";
import { NgBootstrapFormValidationModule } from "../../lib";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BOOTSTRAP_VERSION } from "../../lib/Tokens/tokens";
import { BootstrapVersion } from "../../lib/Enums/BootstrapVersion";
import { BootstrapFourRoutingModule } from "./bootstrap-four-routing.module";

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
