import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DefaultErrorsDemoComponent } from "./default-errors-demo/default-errors-demo.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NgBootstrapFormValidationModule } from "projects/ng-bootstrap-form-validation/src/public_api";

@NgModule({
  declarations: [AppComponent, DefaultErrorsDemoComponent, NavBarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
