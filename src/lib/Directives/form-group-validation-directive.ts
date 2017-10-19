import {
  Directive,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  QueryList
} from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessage } from "../Models/ErrorMessage";
import { ErrorMessageService } from "../Services/error-message.service";

@Directive({
  selector: ".form-group"
})
export class FormGroupValidationDirective {
  @ContentChildren(FormControlName)
  FormControlNames: QueryList<FormControlName>;

  @Input() customErrorMessages: ErrorMessage[] = [];

  @Input() validationDisabled: boolean = false;

  @HostBinding("class.has-error")
  get hasErrors() {
    return (
      this.FormControlNames.some(c => !c.valid && c.dirty && c.touched) &&
      !this.validationDisabled
    );
  }

  @HostBinding("class.has-success")
  get hasSuccess() {
    return (
      !this.FormControlNames.some(c => !c.valid) &&
      this.FormControlNames.some(c => c.dirty && c.touched) &&
      !this.validationDisabled
    );
  }

  constructor(
    private elRef: ElementRef,
    private errorMessageService: ErrorMessageService
  ) {}

  get label() {
    const label = this.elRef.nativeElement.querySelector("label");
    return label && label.textContent ? label.textContent.trim() : "This field";
  }
}
