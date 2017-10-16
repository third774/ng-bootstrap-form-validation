import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-horizontal-form",
  templateUrl: "./horizontal-form.component.html",
  styleUrls: ["./horizontal-form.component.css"]
})
export class HorizontalFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.required),
    rememberMe: new FormControl(false)
  });

  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    console.log(this.loginForm.value);
  }
}
