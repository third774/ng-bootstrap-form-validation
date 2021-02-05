import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { ErrorMessage } from "./error-message";

export interface NgBootstrapFormValidationModuleOptions {
  disableSuccessState?: boolean;
  customErrorMessages?: ErrorMessage[];
  bootstrapVersion: BootstrapVersion;
}
