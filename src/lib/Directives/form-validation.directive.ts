import { Directive, Input, HostListener, OnInit, EventEmitter, Output, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
@Directive({
  selector: "form[formGroup]"
})
export class FormValidationDirective implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() validSubmit = new EventEmitter<any>();
  @Output() anySubmit = new EventEmitter<any>();

  @HostListener("submit")
  onSubmit() {
    this.markAsTouchedAndDirty(this.formGroup);
    if (this.formGroup.valid) {
      this.validSubmit.emit(this.formGroup.value);
    }
    this.anySubmit.emit();
  }

  markAsTouchedAndDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      if (formGroup.controls[key] instanceof FormGroup) {
        this.markAsTouchedAndDirty(formGroup.controls[key] as FormGroup);
      } else {
        formGroup.controls[key].markAsDirty();
        formGroup.controls[key].markAsTouched();
        formGroup.controls[key].updateValueAndValidity();
      }
    });
  }

  constructor() {}

  ngOnInit() {}
}
