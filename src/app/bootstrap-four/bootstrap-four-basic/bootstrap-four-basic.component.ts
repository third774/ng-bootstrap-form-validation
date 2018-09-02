import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-bootstrap-four-basic",
  templateUrl: "./bootstrap-four-basic.component.html",
  styleUrls: ["./bootstrap-four-basic.component.css"]
})
export class BootstrapFourBasicComponent implements OnInit {
  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.email],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      agreeToTerms: [false, Validators.required],
      bestPet: [null, Validators.required]
    });
  }

  ngOnInit() {}

  handleValidSubmit() {
    console.log(this.formGroup.value);
  }

  handleReset() {
    this.formGroup.reset();
  }
}

// .custom-control-input.is-invalid~.custom-control-label
