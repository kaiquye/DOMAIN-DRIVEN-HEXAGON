export class UserCreatedEvent {
  readonly eventName: string;
  readonly date: Date;
  readonly infos: {
    name: string;
    email: string;
    password: string;
  };
  constructor(props: { name: string; email: string; password: string }) {
    this.eventName = 'created.user';
    this.date = new Date();
    this.infos = props;
  }
}
