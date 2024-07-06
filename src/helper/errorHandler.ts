// custom error handler
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
    super();
    this.success = success;
    this.status = status;
    this.message = typeof message === "string" ? message : message?.join(" | ");
  }
}

export default ErrorHandler;
