import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { ErrorMessage } from "./error-message";

export interface NgBootstrapFormValidationModuleOptions {
  addSuccessClass?: boolean;
  customErrorMessages?: ErrorMessage[];
  bootstrapVersion: BootstrapVersion;
}
