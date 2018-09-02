import { ErrorMessage } from "./error-message";
import { BootstrapVersion } from "../Enums";

export interface NgBootstrapFormValidationModuleOptions {
  customErrorMessages?: ErrorMessage[];
  bootstrapVersion: BootstrapVersion;
}
