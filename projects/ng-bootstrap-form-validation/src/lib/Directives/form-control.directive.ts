import {
  Directive,
  Input,
  OnInit,
  HostBinding,
  Optional,
  Host,
  SkipSelf,
  Inject
} from "@angular/core";
import { FormControl, ControlContainer } from "@angular/forms";
import { BootstrapVersion } from "../Enums";
import { BOOTSTRAP_VERSION } from "../Tokens/tokens";

export function controlPath(name: string, parent: ControlContainer): string[] {
  // tslint:disable-next-line:no-non-null-assertion
  return [...parent.path!, name];
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: ".form-control,.form-check-input,.custom-control-input"
})
export class FormControlDirective implements OnInit {
  @Input()
  formControlName: string;
  @Input()
  formControl: string;

  @HostBinding("class.is-valid")
  get validClass() {
    if (!this.control) {
      return false;
    }
    return (
      this.bootstrapFour &&
      this.control.valid &&
      (this.control.touched || this.control.dirty)
    );
  }

  @HostBinding("class.is-invalid")
  get invalidClass() {
    if (!this.control) {
      return false;
    }
    return (
      this.bootstrapFour &&
      this.control.invalid &&
      this.control.touched &&
      this.control.dirty
    );
  }

  get path() {
    return controlPath(this.formControlName, this.parent);
  }

  get control(): FormControl {
    return this.formDirective.getControl(this);
  }

  get formDirective(): any {
    return this.parent ? this.parent.formDirective : null;
  }

  get bootstrapFour() {
    return this.bootstrapVersion === BootstrapVersion.Four;
  }

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private parent: ControlContainer,
    @Inject(BOOTSTRAP_VERSION) private bootstrapVersion: BootstrapVersion
  ) {}

  ngOnInit() {}
}
