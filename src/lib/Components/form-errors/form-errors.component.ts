import { Component, OnInit, Input, Optional, Host, SkipSelf, OnDestroy } from "@angular/core";
import {
  FormGroupDirective,
  FormGroupName,
  FormControlName,
  ControlContainer,
  FormControl
} from "@angular/forms";
import { ErrorMessageService } from "../../Services/error-message.service";
import { FormGroupValidationDirective } from "../../Directives/form-group-validation-directive";
import { FormValidationDirective } from "../../Directives/form-validation.directive";
import { Subscription } from "rxjs/Subscription";

// This function does not appear to be importable via the Angular public API.
// Copied & pasted from
// https://github.com/angular/angular/blob/230b98d4ddffee4df25f62ff3c9ac39a2329abf6/packages/forms/src/directives/shared.ts#L29
function controlPath(name: string, parent: ControlContainer): string[] {
  return [...parent.path!, name];
}

@Component({
  selector: "ng-bs-form-errors",
  templateUrl: "./form-errors.component.html",
  styleUrls: ["./form-errors.component.css"]
})
export class FormErrorsComponent implements OnInit, OnDestroy {
  @Input("for") name: string;
  formControl: FormControl;
  private errorMessages: string[];
  validValueChangesSubscription: Subscription;
  invalidValueChangesSubscription: Subscription;

  get path(): string[] {
    return controlPath(this.name, this._parent!);
  }

  get label(): string {
    return (this.formGroup && this.formGroup.label) || "This field";
  }

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private _parent: ControlContainer,
    private errorMessageService: ErrorMessageService,
    private formGroup: FormGroupValidationDirective,
    private formValidationDirective: FormValidationDirective
  ) {}

  ngOnInit() {
    this.formControl = this._parent.formDirective.getControl(this as any);
    this.setUpSubscriptions();
  }

  ngOnDestroy() {
    this.validValueChangesSubscription.unsubscribe();
    this.invalidValueChangesSubscription.unsubscribe();
  }

  private updateMessages = () => {
    this.errorMessages = this.errorMessageService.generateErrorMessages(this.formControl, this.label);
  };

  private setUpSubscriptions() {
    this.validValueChangesSubscription = this.formControl.valueChanges
      .filter(value => this.formControl.valid)
      .subscribe(this.updateMessages);
    this.invalidValueChangesSubscription = this.formControl.valueChanges
      .filter(value => !this.formControl.valid)
      .debounceTime(500)
      .subscribe(this.updateMessages);
    this.formValidationDirective.anySubmit.subscribe(this.updateMessages);
  }
}
