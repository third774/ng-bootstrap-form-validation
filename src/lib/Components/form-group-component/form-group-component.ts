import {Component, ContentChildren, ElementRef, HostBinding, Input, QueryList} from "@angular/core";
import {FormControlName} from "@angular/forms";
import {ErrorMessage} from "../../Models/ErrorMessage";

@Component({
  selector: '.form-group',
  templateUrl: './form-group-component.html',
  styleUrls: ['./form-group-component.css']
})
export class FormGroupComponent {

  @ContentChildren(FormControlName) FormControlNames: QueryList<FormControlName>;

  constructor(private elRef: ElementRef) {
  }

  get label() {
    const label = this.elRef.nativeElement.querySelector('label');
    return label ? label.textContent : 'This field';
  }

  @HostBinding('class.has-error') get hasErrors() {
    return this.FormControlNames.some(c => !c.valid && c.dirty && c.touched);
  };

  @HostBinding('class.has-success') get hasSuccess() {
    return !this.FormControlNames.some(c => !c.valid) && this.FormControlNames.some(c => c.dirty && c.touched);
  };

  get isDirtyAndTouched() {
    return this.FormControlNames.some(c => c.dirty && c.touched);
  }

  @Input() customErrorMessages: ErrorMessage[];

  get errorMessages(): ErrorMessage[] {
    return this.customErrorMessages ? this.customErrorMessages.concat(this.defaultErrorMessages) : this.defaultErrorMessages;
  };

  get messages(): string[] {
    const messages = [];
    if (!this.isDirtyAndTouched) return messages;
    this.FormControlNames.filter(c => !c.valid).forEach(control => {
      Object.keys(control.errors).forEach(key => {
        const error = this.errorMessages.find(error => error.error === key);
        if (!error) return;
        messages.push(error.format(this.label, control.errors[key]));
      });
    });
    return messages;
  }

  defaultErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: label => `${label} is required`
    },
    {
      error: 'pattern',
      format: label => `${label} is invalid`
    },
    {
      error: 'minlength',
      format: (label, error) => `${label} must be at least ${error.requiredLength} characters`
    },
    {
      error: 'maxlength',
      format: (label, error) => `${label} must be no longer than ${error.requiredLength} characters`
    }
  ];

}
