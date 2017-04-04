# ng-bootstrap-form-validation

An Angular module that makes Bootstrap form validation easy.

## Install

1) Install by running

`npm install ng-bootstrap-form-validation --save`

2) Add `NgBootstrapFormValidationModule` to your `app.module.ts` declaration:

```
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
    NgBootstrapFormValidationModule
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

```
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ErrorMessage } from "ng-bootstrap-form-validation";

@Component({
  selector: 'app-basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.css']
})
export class BasicExampleComponent implements OnInit {

  constructor() { }

  public form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(26)
      ])
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}

```

`basic-example.component.html`


```
<form [formGroup]="form" (submit)="onSubmit()">
    <div class="form-group">
        <label class="control-label" for="exampleInputEmail1">Email</label>
        <input type="text"
               class="form-control"
               id="exampleInputEmail1"
               placeholder="Email"
               formControlName="Email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password"
               class="form-control"
               id="exampleInputPassword1"
               placeholder="Password" formControlName="Password">
        </div>
    <button type="submit" class="btn btn-primary pull-right">Submit</button>
</form>
```

### Custom Messages
Documentation to follow...

## Roadmap
* Add out of the box support for `ng2-validation` validators