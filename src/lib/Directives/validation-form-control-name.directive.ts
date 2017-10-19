import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  Renderer2,
  ElementRef
} from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessage } from "../Models/ErrorMessage";
import { ErrorMessageService } from "../Services/error-message.service";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/debounceTime";
import { FormValidationDirective } from "./form-validation.directive";

@Directive({
  selector: "[formControlName]"
})
export class ValidationFormControlNameDirective implements OnInit, OnDestroy {
  @Input() customErrorMessages: ErrorMessage[] = [];
  @Input() validationDisabled: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private errorMessageService: ErrorMessageService,
    private formControlName: FormControlName,
    private formGroup: FormValidationDirective
  ) {}

  validValueChangesSubscription: Subscription;
  invalidValueChangesSubscription: Subscription;

  ngOnInit() {
    this.validValueChangesSubscription = this.formControlName.valueChanges
      .filter(value => this.formControlName.valid)
      .subscribe(this.updateErrorText);

    this.invalidValueChangesSubscription = this.formControlName.valueChanges
      .filter(value => !this.formControlName.valid)
      .debounceTime(500)
      .subscribe(this.updateErrorText);

    this.formGroup.anySubmit.subscribe(this.updateErrorText);
  }

  ngOnDestroy() {
    this.validValueChangesSubscription.unsubscribe();
    this.invalidValueChangesSubscription.unsubscribe();
  }

  helpBlocks: any[] = [];

  updateErrorText = () => {
    const generatedErrorMessages = this.errorMessageService.generateErrorMessages(
      this.formControlName,
      "This field",
      this.customErrorMessages
    );

    this.helpBlocks.forEach(block =>
      this.renderer.removeChild(
        this.renderer.parentNode(this.el.nativeElement),
        block
      )
    );

    // empty the array
    this.helpBlocks.length = 0;

    if (this.formControlName.dirty) {
      generatedErrorMessages.forEach(errorMessage => {
        const helpBlock = this.renderer.createElement("span");
        this.helpBlocks.push(helpBlock);
        helpBlock.classList.add("help-block");
        helpBlock.innerHTML = errorMessage;
        this.renderer.appendChild(
          this.renderer.parentNode(this.el.nativeElement),
          helpBlock
        );
      });
    }
  };
}
