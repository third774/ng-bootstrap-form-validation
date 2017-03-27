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

  labelToken = "%%LABEL%%";

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
        if (error.format) {
          messages.push(error.format(control.errors[key], this.label).replace(this.labelToken, this.label));
        } else {
          messages.push(error.message.replace(this.labelToken, this.label));
        }
      });
    });
    return messages;
  }

  defaultErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      message: `${this.labelToken} is required`
    },
    {
      error: 'pattern',
      message: `${this.labelToken} is invalid`
    },
    {
      error: 'minlength',
      format: (error, label) => {
        return `${this.labelToken} must be at least ${error.requiredLength} characters`;
      }
    },
    {
      error: 'maxlength',
      format: (error, label) => {
        return `${this.labelToken} must be no longer than ${error.requiredLength} characters`;
      }
    }
  ];

}
