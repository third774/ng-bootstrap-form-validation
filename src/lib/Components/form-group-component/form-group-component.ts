import {
  Component,
  ContentChildren,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  AfterContentInit,
  Inject,
  Host,
  Optional,
  OnDestroy
} from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessage } from "../../Models/ErrorMessage";
import { ErrorMessageService } from "../../Services/error-message.service";
import { MessagesComponent } from "../messages/messages.component";
import { FormValidationDirective } from "../../Directives";

import "rxjs/add/operator/filter";
import "rxjs/add/operator/do";
import "rxjs/add/operator/debounceTime";
import { Subscription } from "rxjs/Subscription";

@Component({
  // tslint:disable:component-selector
  selector: ".form-group",
  template: `
    <ng-content></ng-content>
    <bfv-messages *ngIf="!messagesBlock" [messages]="messages"></bfv-messages>
  `
})
export class FormGroupComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(FormControlName)
  FormControlNames: QueryList<FormControlName>;

  @Input() customErrorMessages: ErrorMessage[] = [];

  @Input() validationDisabled = false;

  @HostBinding("class.has-error")
  get hasErrors() {
    return (
      this.showFeedback &&
      this.FormControlNames.some(c => c.invalid) &&
      this.FormControlNames.some(c => c.dirty) &&
      !this.validationDisabled
    );
  }

  @HostBinding("class.has-success")
  get hasSuccess() {
    return (
      this.showFeedback &&
      !this.FormControlNames.some(c => !c.valid) &&
      this.FormControlNames.some(c => c.dirty) &&
      !this.validationDisabled
    );
  }

  @HostBinding("class.has-warning")
  get hasWarning() {
    return (
      this.FormControlNames.some(c => c.pending) &&
      this.FormControlNames.some(c => c.dirty) &&
      !this.validationDisabled
    );
  }

  @ContentChild(MessagesComponent) public messagesBlock: MessagesComponent;

  private showFeedback = false;
  public messages: () => string[];
  private eagerValidation = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private elRef: ElementRef,
    @Optional()
    @Host()
    @Inject(FormValidationDirective)
    private form: FormValidationDirective,
    private errorMessageService: ErrorMessageService
  ) {
    this.messages = () => this.getMessages();
  }

  ngAfterContentInit() {
    if (this.form) {
      this.subscriptions.push(
        this.form.anySubmit.subscribe(() => (this.showFeedback = true))
      );
    }
    this.FormControlNames.forEach(c =>
      this.subscriptions.push(
        c.statusChanges
          .filter(status => status === "INVALID")
          .do(() => {
            if (!this.eagerValidation) {
              this.showFeedback = false;
            }
          })
          .debounceTime(500)
          .subscribe(() => {
            this.eagerValidation = true;
            this.showFeedback = true;
          })
      )
    );
    this.FormControlNames.forEach(c =>
      this.subscriptions.push(
        c.statusChanges.filter(status => status === "VALID").subscribe(() => {
          this.eagerValidation = false;
          this.showFeedback = true;
        })
      )
    );
    if (this.messagesBlock) {
      this.messagesBlock.messages = this.messages;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  get label() {
    const label = this.elRef.nativeElement.querySelector("label");
    return label && label.textContent ? label.textContent.trim() : "This field";
  }

  get isDirtyAndTouched() {
    return this.FormControlNames.some(c => c.dirty && c.touched);
  }

  get errorMessages(): ErrorMessage[] {
    return this.customErrorMessages.concat(
      this.errorMessageService.errorMessages
    );
  }

  private getMessages(): string[] {
    const messages = [];
    if (
      !this.showFeedback ||
      !this.FormControlNames.some(c => c.dirty) ||
      this.validationDisabled
    ) {
      return messages;
    }

    this.FormControlNames.filter(c => !c.valid && !!c.errors).forEach(
      control => {
        Object.keys(control.errors).forEach(key => {
          const error = this.errorMessages.find(err => err.error === key);
          if (!error) {
            return;
          }
          messages.push(error.format(this.label, control.errors[key]));
        });
      }
    );

    return messages;
  }
}
