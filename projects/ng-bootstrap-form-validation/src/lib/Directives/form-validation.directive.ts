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
    if (this.formGroup.valid) {
      this.validSubmit.emit(this.formGroup.value);
    }
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
