import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";
import { DefaultErrorsDemoComponent } from "./default-errors-demo/default-errors-demo.component";

import { NgBootstrapFormValidationModule } from "../lib/ng-bootstrap-form-validation.module";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
  declarations: [AppComponent, DefaultErrorsDemoComponent, NavBarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
