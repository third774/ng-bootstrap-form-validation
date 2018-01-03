import { Component, Input } from "@angular/core";

@Component({
  selector: "help-block",
  template: `
    <span class="help-block" *ngFor="let message of messages()">{{message}}</span>
  `
})
export class HelpBlockComponent {
  @Input() public messages = () => [];

  constructor() {}
}
