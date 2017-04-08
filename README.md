# ng-bootstrap-form-validation

An Angular module that makes Bootstrap form validation easy.

Check out [the demo](https://third774.github.io/ng-bootstrap-form-validation)!

## Install

1) Install by running

`npm install ng-bootstrap-form-validation --save`

2) Add `NgBootstrapFormValidationModule.forRoot()` to your `app.module.ts` imports:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

### Basics
ng-bootstrap-form-validation works by using the `form-group` Bootstrap class on your divs as component selector, and projecting the content into a component which handles form validation feedback for you.

The `has-error` and `has-success` classes are automatically added or removed to your `form-group` based on whether or not the input is valid, and is both `touched` and `dirty`.

Validation messages appear when an input is `dirty`, `touched`, and has errors.

Submitting the form will iterate over all controls and mark them as `touched` and `dirty` to provide feedback to the user. Additionally, there is a `validSubmit` event on forms which you can bind to instead of `submit` to only fire off when the form is actually valid.

Built-in Angular validators such as `Validators.required` work out of the box without any additional markup in your template.

`basic-example.component.ts`

```ts
import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.css']
})
export class BasicExampleComponent implements OnInit {

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}
```

`basic-example.component.html`
```html
<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <form [formGroup]="formGroup" (validSubmit)="onSubmit()">
      <div class="form-group">
        <label class="control-label">Email</label>
        <input type="text" class="form-control" formControlName="Email">
      </div>
      <div class="form-group">
        <label class="control-label">Password</label>
        <input type="password" class="form-control" formControlName="Password">
      </div>
      <button class="btn btn-default" type="button" (click)="onReset()">Reset</button>
      <button class="btn btn-primary pull-right" type="submit">Submit</button>
    </form>
  </div>
</div>
```

### Custom Messages

Optionally, you can pass an `ErrorMessage` array into the `.forRoot()` method in your `app.module.ts` to provide custom errors across your entire app. The `ErrorMessage` interface looks like this:

```ts
/**
 * Interface for creating validation messages
 */
export interface ErrorMessage {
  /**
   * The error key to look for on the FormControl.errors object
   */
  error: string;
  /**
   * The message string function to create the validation message to be displayed.
   * @param {string} label The text from the first <label> tag found within the .form-group
   * @param {*} error The value accessed from FormControl.errors[error] using ErrorMessage.error as the key
   */
  format?: (label?: string, error?: any) => string;
}
```

In addition to providing custom errors at the top level using the `.forRoot()` method,
you can provide custom error messages to a specific control by binding to the
`customErrorMessages` directive on the `.form-group` element. Modifying the basic 
example above, we can provide a one time custom error message to a specific `.form-group`

`custom-error-example.component.ts`
```ts
import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ErrorMessage} from "../../lib/Models/ErrorMessage";

@Component({
  selector: 'app-custom-errors',
  templateUrl: './custom-errors.component.html',
  styleUrls: ['./custom-errors.component.css']
})
export class CustomErrorsComponent implements OnInit {

  formGroup: FormGroup;

  customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) => `${label.toUpperCase()} IS DEFINITELY REQUIRED!`
    }, {
      error: 'pattern',
      format: (label, error) => `${label.toUpperCase()} DOESN'T LOOK RIGHT...`
    }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}
```

`custom-error-example.component.html`
```html
<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <form [formGroup]="formGroup" (validSubmit)="onSubmit()">
      <div class="form-group" [customErrorMessages]="customErrorMessages">
        <label class="control-label">Email</label>
        <input type="text" class="form-control" formControlName="Email">
      </div>
      <div class="form-group">
        <label class="control-label">Password</label>
        <input type="password" class="form-control" formControlName="Password">
      </div>
      <button class="btn btn-default" type="button" (click)="onReset()">Reset</button>
      <button class="btn btn-primary pull-right" type="submit">Submit</button>
    </form>
  </div>
</div>
```

## Roadmap
* Add out of the box support for `ng2-validation` validators
