import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-bootstrap-four",
  templateUrl: "./bootstrap-four.component.html",
  styleUrls: ["./bootstrap-four.component.css"]
})
export class BootstrapFourComponent implements OnInit, OnDestroy {
  link: HTMLLinkElement;

  constructor() {}

  ngOnInit() {
    this.link = document.createElement("link");
    this.link.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
    this.link.rel = "stylesheet";
    this.link.integrity =
      "sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B";
    this.link.crossOrigin = "anonymous";
    document.head.appendChild(this.link);
  }

  ngOnDestroy() {
    document.head.removeChild(this.link);
  }
}
