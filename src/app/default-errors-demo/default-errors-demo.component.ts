import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-default-errors-demo",
  templateUrl: "./default-errors-demo.component.html",
  styleUrls: ["./default-errors-demo.component.scss"]
})
export class DefaultErrorsDemoComponent implements OnInit {
  validationForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.validationForm = fb.group({
      email: ["", Validators.email],
      requiredField: ["", Validators.required],
      pattern: ["", Validators.pattern(/foobar/)],
      minValue: [0, Validators.min(10)],
      maxValue: [10, Validators.max(5)]
    });
  }

  ngOnInit() {}

  handleValidSubmit() {
    console.log(this.validationForm.value);
  }

  handleReset() {
    this.validationForm.reset({
      minValue: 0,
      maxValue: 10
    });
  }
}
