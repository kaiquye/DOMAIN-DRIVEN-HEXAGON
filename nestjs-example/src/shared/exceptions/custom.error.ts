export class ErrorBase extends Error {
  readonly status: number;
  readonly reference: string;
  readonly date: Date;

  constructor(status: number, message: string, reference: string) {
    super(message);
    this.status = status;
    this.reference = reference;
    this.date = new Date();
  }
}
