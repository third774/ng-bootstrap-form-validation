import {
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  OnInit
} from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessage } from "../../Models/ErrorMessage";
import { ErrorMessageService } from "../../Services/error-message.service";

@Component({
  selector: ".form-group",
  template: `
    <ng-content></ng-content>
    <span class="help-block" *ngFor="let message of messages">{{message}}</span>
  `
})
export class FormGroupComponent implements OnInit {
  @ContentChildren(FormControlName)
  FormControlNames: QueryList<FormControlName>;

  @Input() customErrorMessages: ErrorMessage[] = [];

  @Input() validationDisabled = false;

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

  public errorMessages: ErrorMessage[];

  constructor(
    private elRef: ElementRef,
    private errorMessageService: ErrorMessageService
  ) {}

  ngOnInit() {
    this.errorMessages = [
      ...this.errorMessageService.errorMessages,
      ...this.customErrorMessages
    ].reverse();
  }

  get label() {
    const label = this.elRef.nativeElement.querySelector("label");
    return label && label.textContent ? label.textContent.trim() : "This field";
  }

  get isDirtyAndTouched() {
    return this.FormControlNames.some(c => c.dirty && c.touched);
  }

  get messages(): string[] {
    const messages = [];
    if (!this.isDirtyAndTouched || this.validationDisabled) {
      return messages;
    }
    this.FormControlNames.filter(c => !c.valid).forEach(control => {
      Object.keys(control.errors).forEach(key => {
        const error = this.errorMessages.find(err => err.error === key);
        if (!error) {
          return;
        }
        messages.push(error.format(this.label, control.errors[key]));
      });
    });
    return messages;
  }
}
