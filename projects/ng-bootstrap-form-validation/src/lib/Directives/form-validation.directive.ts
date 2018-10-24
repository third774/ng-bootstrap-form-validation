import {
  Directive,
  EventEmitter,
  Input,
  Output,
  HostListener
} from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup
} from "@angular/forms";
import { take } from "rxjs/operators";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[formGroup]"
})
export class FormValidationDirective {
  @Input()
  formGroup: FormGroup;
  @Output()
  validSubmit = new EventEmitter<any>();

  @HostListener("submit")
  onSubmit() {
    this.markAsTouchedAndDirty(this.formGroup);
    this.formGroup.statusChanges
      .pipe(take(1))
      .toPromise()
      .then(result => {
        if (result === "VALID") {
          this.validSubmit.emit(this.formGroup.value);
        }
      });
  }

  markAsTouchedAndDirty(control: AbstractControl) {
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach(key =>
        this.markAsTouchedAndDirty(control.controls[key])
      );
    } else if (control instanceof FormArray) {
      control.controls.forEach(c => this.markAsTouchedAndDirty(c));
    } else if (control instanceof FormControl && control.enabled) {
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }
}
