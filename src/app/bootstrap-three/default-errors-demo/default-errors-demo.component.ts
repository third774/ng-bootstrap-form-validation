import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";
import { of } from "rxjs";
import { delay, map } from "rxjs/operators";

@Component({
  selector: "app-default-errors-demo",
  templateUrl: "./default-errors-demo.component.html",
  styleUrls: ["./default-errors-demo.component.css"]
})
export class DefaultErrorsDemoComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl("", Validators.email),
    requiredField: new FormControl("", Validators.required),
    pattern: new FormControl("", Validators.pattern(/foobar/)),
    minValue: new FormControl(0, Validators.min(10)),
    maxValue: new FormControl(10, Validators.max(5)),
    async: new FormControl(10, null, this.asyncValidator.bind(this))
  });

  constructor() {}

  ngOnInit() {}

  handleValidSubmit() {
    console.log(this.formGroup.value);
  }

  handleReset() {
    this.formGroup.reset({
      minValue: 0,
      maxValue: 10
    });
  }

  asyncValidator(control: AbstractControl) {
    const valid = control.value > 10;
    return of(valid).pipe(
      delay(500),
      map(result => (result ? null : { asyncValidation: true }))
    );
  }
}
