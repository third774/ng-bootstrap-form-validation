import { Component, Input } from "@angular/core";

@Component({
  selector: "bfv-messages",
  template: `
    <span class="help-block" *ngFor="let message of messages()">{{message}}</span>
  `
})
export class MessagesComponent {
  @Input()
  // tslint:disable-next-line:semicolon
  public messages = () => [];
}
