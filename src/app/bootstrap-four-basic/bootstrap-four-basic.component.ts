import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-bootstrap-four-basic",
  templateUrl: "./bootstrap-four-basic.component.html",
  styleUrls: ["./bootstrap-four-basic.component.css"]
})
export class BootstrapFourBasicComponent implements OnInit {
  formGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    zip: new FormControl("", Validators.required),
    agreeToTerms: new FormControl(false, Validators.required),
    bestPet: new FormControl(null, Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  handleValidSubmit() {
    console.log(this.formGroup.value);
  }

  handleReset() {
    this.formGroup.reset();
  }
}

// .custom-control-input.is-invalid~.custom-control-label
