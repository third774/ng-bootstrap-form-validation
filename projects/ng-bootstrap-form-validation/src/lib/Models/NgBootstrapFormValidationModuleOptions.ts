import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { ErrorMessage } from "./error-message";

export interface NgBootstrapFormValidationModuleOptions {
  customErrorMessages?: ErrorMessage[];
  bootstrapVersion: BootstrapVersion;
}
