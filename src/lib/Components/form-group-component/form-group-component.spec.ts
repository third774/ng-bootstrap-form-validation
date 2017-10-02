import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {FormGroupComponent} from "./form-group-component";
import {ErrorMessageService} from "../../Services/error-message.service";
import {CUSTOM_ERROR_MESSAGES} from "../../Tokens/tokens";
import {errorMessageServiceFactory} from "../../ng-bootstrap-form-validation.module";

describe('FormGroupComponent', () => {
    let component: FormGroupComponent;
    let fixture: ComponentFixture<FormGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormGroupComponent],
            providers: [
                {
                    provide: ErrorMessageService,
                    useFactory: errorMessageServiceFactory,
                    deps: [CUSTOM_ERROR_MESSAGES]
                },
                {
                    provide: CUSTOM_ERROR_MESSAGES,
                    useValue: []
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
