import { TestBed, inject } from "@angular/core/testing";

import { ErrorMessageService } from "./error-message.service";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";

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
        ErrorMessageService,
        {
          provide: CUSTOM_ERROR_MESSAGES,
          useValue: [customRequiredErrorMessage],
          multi: true
        }
      ]
    });
  });

  it("should inject ErrorMessageService", inject(
    [ErrorMessageService],
    (service: ErrorMessageService) => {
      expect(service).toBeTruthy();
    }
  ));

  describe("errorMessages()", () => {
    it("should return custom errors after default errors", inject(
      [ErrorMessageService],
      (service: ErrorMessageService) => {
        expect(service.errorMessages.pop()).toEqual(customRequiredErrorMessage);
      }
    ));
  });
});
