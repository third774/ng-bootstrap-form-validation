import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-custom-errors',
  templateUrl: './custom-errors.component.html',
  styleUrls: ['./custom-errors.component.css']
})
export class CustomErrorsComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
  }

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

