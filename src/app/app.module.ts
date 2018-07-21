import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { NgBootstrapFormValidationModule } from "../lib/ng-bootstrap-form-validation.module";
import { BootstrapFourComponent } from "./bootstrap-four/bootstrap-four.component";
import { BootstrapFourNavComponent } from "./bootstrap-four-nav/bootstrap-four-nav.component";
import { BootstrapFourBasicComponent } from "./bootstrap-four-basic/bootstrap-four-basic.component";
import { BootstrapThreeModule } from "./bootstrap-three/bootstrap-three.module";
import { BOOTSTRAP_VERSION } from "../lib/public_api";
import { BootstrapVersion } from "../lib/Enums/BootstrapVersion";

@NgModule({
  declarations: [
    AppComponent,
    BootstrapFourComponent,
    BootstrapFourNavComponent,
    BootstrapFourBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapThreeModule,
    RouterModule.forRoot(appRoutes),
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
