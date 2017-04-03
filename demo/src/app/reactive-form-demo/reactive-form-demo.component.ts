import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ErrorMessage} from "../../../../dist/Models/ErrorMessage";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {

  constructor() { }

  customErrors: ErrorMessage[] = [
    {
      error: 'required',
      format: (error, label) => {
        return `${label} IS REQUIRED`;
      }
    }
  ];

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(26)])

    });
  }

  onSubmit() {
    console.log(this.form);
  }

}
