import {
  Directive,
  Input,
  HostBinding,
  Optional,
  Host,
  SkipSelf,
  OnInit
} from "@angular/core";
import { FormControlName, ControlContainer, FormControl } from "@angular/forms";
import { ErrorMessageService } from "../lib/Services";
import { BootstrapVersion } from "../lib/Enums/BootstrapVersion";

export function controlPath(name: string, parent: ControlContainer): string[] {
  // tslint:disable-next-line:no-non-null-assertion
  return [...parent.path!, name];
}

@Directive({
  selector: ".form-control"
})
export class FormControlDirective implements OnInit {
  @Input() formControlName: string;
  @Input() formControl: string;

  @HostBinding("class.is-valid")
  get validClass() {
    return (
      this.bootstrapFour &&
      this.control.valid &&
      (this.control.touched || this.control.dirty)
    );
  }

  @HostBinding("class.is-invalid")
  get invalidClass() {
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
    return (
      this.errorMessageService.moduleOptions.bootstrapVersion ===
      BootstrapVersion.Four
    );
  }

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private parent: ControlContainer,
    private errorMessageService: ErrorMessageService
  ) {}

  ngOnInit() {}
}
