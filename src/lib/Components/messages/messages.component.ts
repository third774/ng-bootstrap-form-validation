import { Component, Input, Inject } from "@angular/core";
import { ErrorMessageService } from "../../Services/error-message.service";

@Component({
  selector: "bfv-messages",
  template: `
    <span [ngClass]="className" *ngFor="let message of messages()">{{message}}</span>
  `
})
export class MessagesComponent {
  @Input() public messages = () => [];

  get className() {
    return this.errorMessageService.errorClassName;
  }

  constructor(private errorMessageService: ErrorMessageService) {
    console.log(errorMessageService);
  }
}
