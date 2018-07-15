import {
  Directive,
  Input,
  HostListener,
  OnInit,
  EventEmitter,
  Output,
  HostBinding,
  OnDestroy
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ErrorMessageService } from "../Services";
import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/delay";

@Directive({
  selector: "form[formGroup]"
})
export class FormValidationDirective implements OnInit, OnDestroy {
  validated = false;
  wasPristine = true;
  statusChangeSubscription: Subscription;
  @Input() formGroup: FormGroup;
  @Output() validSubmit = new EventEmitter<any>();
  @HostBinding("class")
  get className() {
    return this.validated &&
      this.errorMessageService.moduleOptions.bootstrapVersion ===
        BootstrapVersion.Four
      ? "was-validated"
      : "";
  }
  @HostListener("submit")
  onSubmit() {
    this.validated = true;
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

  constructor(private errorMessageService: ErrorMessageService) {}

  watchForReset = () => {
    if (!this.wasPristine && this.formGroup.pristine) {
      this.validated = false;
    }
    this.wasPristine = this.formGroup.pristine;
  };

  ngOnInit() {
    this.statusChangeSubscription = this.formGroup.statusChanges
      // Delay this so the change can flush through
      .delay(0)
      .subscribe(this.watchForReset);
  }

  ngOnDestroy() {
    this.statusChangeSubscription.unsubscribe();
  }
}
