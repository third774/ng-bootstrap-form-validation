import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ErrorMessage} from "../../lib/Models/ErrorMessage";

@Component({
  selector: 'app-custom-errors',
  templateUrl: './custom-errors.component.html',
  styleUrls: ['./custom-errors.component.css']
})
export class CustomErrorsComponent implements OnInit {

  formGroup: FormGroup;

  customErrors: ErrorMessage[] = [
    {
      error: 'maxNumber',
      format: (label, error: MaxNumberError) =>
        `${label} must be below ${error.maxNumber}. Actual value: ${error.actualNumber}`
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Price: new FormControl('', [maxNumber(100), Validators.required])
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}

function maxNumber(num: number): ValidatorFn {
  return function (control: FormControl) {
    if (control.value === "" || isNaN(control.value)) return null;
    const actualValue = parseInt(control.value);
    if (actualValue > num) {
      const error: MaxNumberError = {
        maxNumber: num,
        actualNumber: actualValue
      };
      return {
        maxNumber: error
      };
      ;
    } else {
      return null;
    }
  }
}

interface MaxNumberError {
  maxNumber: number;
  actualNumber: number;
}
