import { ErrorMessage } from "./ErrorMessage";
import { BootstrapVersion } from "../Enums/BootstrapVersion";

export interface NgBootstrapFormValidationModuleOptions {
  customErrorMessages?: ErrorMessage[];
  bootstrapVersion: BootstrapVersion;
}
