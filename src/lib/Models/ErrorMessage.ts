export interface ErrorMessage {
  error: string;
  format?: (label?: string, error?: any) => string;
}
