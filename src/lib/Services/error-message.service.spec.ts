import { inject, TestBed } from "@angular/core/testing";

import { ErrorMessageService } from "./error-message.service";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";
import { errorMessageServiceFactory } from "../ng-bootstrap-form-validation.module";

describe("ErrorMessageService", () => {
  const customRequiredErrorMessage = {
    error: "required",
    format: function(label, error) {
      return `${label} IS DEFINITELY REQUIRED!!!`;
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ErrorMessageService,
          useFactory: errorMessageServiceFactory,
          deps: [CUSTOM_ERROR_MESSAGES]
        },
        {
          provide: CUSTOM_ERROR_MESSAGES,
          useValue: [customRequiredErrorMessage]
        }
      ]
    });
  });

  it(
    "should inject ErrorMessageService",
    inject([ErrorMessageService], (service: ErrorMessageService) => {
      expect(service).toBeTruthy();
    })
  );

  describe("errorMessages()", () => {
    it(
      "should return custom errors before default errors",
      inject([ErrorMessageService], (service: ErrorMessageService) => {
        expect(service.errorMessages[0]).toEqual(customRequiredErrorMessage);
      })
    );
  });
});
