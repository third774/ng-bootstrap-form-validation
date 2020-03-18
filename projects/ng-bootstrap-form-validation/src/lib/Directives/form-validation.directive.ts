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
import {Subject} from 'rxjs';
import {filter, startWith, switchMap, take, tap} from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[formGroup]"
})
export class FormValidationDirective {
  @Input()
  formGroup: FormGroup;
  @Output()
  validSubmit = new EventEmitter<any>();
  formSubmitSubject$: Subject<any>;

  constructor() {
    this.checkSubmit();
  }

  @HostListener("submit")
  onSubmit() {
    this.markAsTouchedAndDirty(this.formGroup);
    this.formSubmitSubject$.next();
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

  checkSubmit() {
    this.formSubmitSubject$ = new Subject();

    this.formSubmitSubject$
      .pipe(
        tap(() => this.formGroup.markAsDirty()),
        switchMap(() =>
          this.formGroup.statusChanges.pipe(
            startWith(this.formGroup.status),
            filter(status => status !== 'PENDING'),
            take(1)
          )
        ),
        filter(status => status === 'VALID')
      )
      .subscribe(() => this.submitForm());
  }

  submitForm() {
    if (this.formGroup.valid) {
      this.validSubmit.emit(this.formGroup.value);
    }
  }
}
