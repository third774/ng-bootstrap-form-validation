import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { NgBootstrapFormValidationModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        NgBootstrapFormValidationModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
