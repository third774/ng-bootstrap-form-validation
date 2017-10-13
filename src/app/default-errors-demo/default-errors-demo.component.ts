import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-default-errors-demo',
  templateUrl: './default-errors-demo.component.html',
  styleUrls: ['./default-errors-demo.component.css']
})
export class DefaultErrorsDemoComponent implements OnInit {

  formGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    requiredField: new FormControl('', Validators.required),
    pattern: new FormControl('', Validators.pattern(/foobar/)),
    minValue: new FormControl(0, Validators.min(10)),
    maxValue: new FormControl(10, Validators.max(5))
  });
  title: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  handleValidSubmit() {
    console.log(this.formGroup.value);
  }

  handleSubmitWithoutFormGroup() {
    console.log('Form without group is submitted.');
    console.log({title: this.title, description: this.description});
  }

  handleReset() {
    this.formGroup.reset({
      minValue: 0,
      maxValue: 10
    });
  }

  handleResetWithoutFormGroup() {
    this.title = '';
    this.description = '';
  }

}
