import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-bootstrap-three",
  templateUrl: "./bootstrap-three.component.html",
  styleUrls: ["./bootstrap-three.component.css"]
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
