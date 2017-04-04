import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularBootstrapFormValidationModule } from "ng-bootstrap-form-validation";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { AppRoutesModule } from "app/app-routing.module";
import { CustomErrorsComponent } from './custom-errors/custom-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BasicExampleComponent,
    CustomErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularBootstrapFormValidationModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
