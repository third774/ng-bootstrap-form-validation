import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { NgBootstrapFormValidationModule } from "../lib/ng-bootstrap-form-validation.module";
import { BootstrapThreeModule } from "./bootstrap-three/bootstrap-three.module";
import { BootstrapFourModule } from "./bootstrap-four/bootstrap-four.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapThreeModule,
    BootstrapFourModule,
    RouterModule.forRoot(appRoutes),
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
