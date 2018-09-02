import {
  NgBootstrapFormValidationModule,
  BOOTSTRAP_VERSION,
  BootstrapVersion
} from "ng-bootstrap-form-validation";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BootstrapThreeNavComponent } from "./bootstrap-three-nav/bootstrap-three-nav.component";
import { DefaultErrorsDemoComponent } from "./default-errors-demo/default-errors-demo.component";
import { BootstrapThreeComponent } from "./bootstrap-three.component";
import { BootstrapThreeRoutingModule } from "./bootstrap-three.routes";

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
