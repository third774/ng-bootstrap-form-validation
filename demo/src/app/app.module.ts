import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {ReactiveFormDemoComponent} from "./reactive-form-demo/reactive-form-demo.component";
import {AppRoutes} from "./app-routing.module";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {AngularBootstrapFormValidationModule} from "../../../dist/src/bootstrap-form-validation.module";

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormDemoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    AngularBootstrapFormValidationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
