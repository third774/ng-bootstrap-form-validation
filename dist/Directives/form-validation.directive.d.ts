import { OnInit, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class FormValidationDirective implements OnInit {
    formGroup: FormGroup;
    validSubmit: EventEmitter<any>;
    onSubmit(): void;
    markAsTouchedAndDirty(formGroup: FormGroup): void;
    constructor();
    ngOnInit(): void;
}
