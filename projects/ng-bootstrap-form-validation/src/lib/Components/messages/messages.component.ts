import { Component, Input, Inject } from "@angular/core";
import { BootstrapVersion } from "../../../lib/Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../../Tokens/tokens";

@Component({
  selector: "bfv-messages",
  template: `
    <span [ngClass]="className" *ngFor="let message of messages()">{{
      message
    }}</span>
  `,
  styles: [
    `
      .invalid-feedback,
      .valid-feedback {
        display: block;
      }
    `
  ]
})
export class MessagesComponent {
  @Input()
  public messages = () => [];

  get className() {
    switch (this.bootstrapVersion) {
      case BootstrapVersion.Three:
        return "help-block";
      case BootstrapVersion.Four:
        return "invalid-feedback";
    }
  }

  constructor(
    @Inject(BOOTSTRAP_VERSION) private bootstrapVersion: BootstrapVersion
  ) {}
}
