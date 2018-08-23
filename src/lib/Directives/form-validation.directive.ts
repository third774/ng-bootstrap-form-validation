import {
  Directive,
  Input,
  HostListener,
  OnInit,
  EventEmitter,
  Output
} from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: "form[formGroup]"
})
export class FormValidationDirective implements OnInit {
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

  markAsTouchedAndDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];
      if (control instanceof FormGroup) {
        this.markAsTouchedAndDirty(control as FormGroup);
      } else if (control.enabled) {
        control.markAsDirty();
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
  }

  constructor() {}

  ngOnInit() {}
}
