export abstract class IEmailAdapters<Input, Output> {
  templatePath: string;
  constructor(template: string) {
    this.templatePath = template;
  }

  abstract send(data: Input): Output;
}
