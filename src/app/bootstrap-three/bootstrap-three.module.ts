import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BootstrapThreeNavComponent } from "./bootstrap-three-nav/bootstrap-three-nav.component";
import { DefaultErrorsDemoComponent } from "./default-errors-demo/default-errors-demo.component";
import { BootstrapThreeComponent } from "./bootstrap-three.component";
import { BootstrapThreeRoutingModule } from "./bootstrap-three.routes";
import { NgBootstrapFormValidationModule } from "../../../projects/ng-bootstrap-form-validation/src/lib/ng-bootstrap-form-validation.module";
import { BOOTSTRAP_VERSION } from "../../../projects/ng-bootstrap-form-validation/src/lib/Tokens/tokens";
import { BootstrapVersion } from "../../../projects/ng-bootstrap-form-validation/src/lib/Enums/BootstrapVersion";

@NgModule({
  imports: [
    CommonModule,
    NgBootstrapFormValidationModule,
    BootstrapThreeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BootstrapThreeComponent,
    BootstrapThreeNavComponent,
    DefaultErrorsDemoComponent
  ],
  declarations: [
    DefaultErrorsDemoComponent,
    BootstrapThreeNavComponent,
    BootstrapThreeComponent
  ],
  providers: [
    {
      provide: BOOTSTRAP_VERSION,
      useValue: BootstrapVersion.Three
    }
  ]
})
export class BootstrapThreeModule {}
