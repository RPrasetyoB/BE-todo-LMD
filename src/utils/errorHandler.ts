// utils/errorHandler.ts
class ErrorHandler extends Error {
  public success: boolean;
  public status: number;
  public message: string;

  constructor({
    success,
    message,
    status,
  }: {
    success: boolean;
    message: string | string[];
    status: number;
  }) {
    super(typeof message === "string" ? message : message?.join(", "));
    this.success = success;
    this.status = status;
    this.message = typeof message === "string" ? message : message?.join(", ");
  }
}

export default ErrorHandler;
