import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  BOOTSTRAP_VERSION,
  CUSTOM_ERROR_MESSAGES,
  ErrorMessage
} from "../../lib/public_api";
import { BootstrapVersion } from "../../lib/Enums/BootstrapVersion";

export const required: ErrorMessage = {
  error: "required",
  format: () => "FUCKING REQUIRED"
};

export const messages = [required];

@Component({
  selector: "app-bootstrap-three",
  templateUrl: "./bootstrap-three.component.html",
  styleUrls: ["./bootstrap-three.component.css"],
  providers: [
    {
      provide: BOOTSTRAP_VERSION,
      useValue: { bootstrapVersion: BootstrapVersion.Three },
      multi: true
    },
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: messages,
      multi: true
    }
  ]
})
export class BootstrapThreeComponent implements OnInit, OnDestroy {
  link: HTMLLinkElement;

  constructor() {}

  ngOnInit() {
    this.link = document.createElement("link");
    this.link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    this.link.rel = "stylesheet";
    document.head.appendChild(this.link);
  }

  ngOnDestroy() {
    document.head.removeChild(this.link);
  }
}
