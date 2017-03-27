export interface ErrorMessage {
  error: string;
  message?: string;
  format?: (error: any, label?: string) => string;
}
