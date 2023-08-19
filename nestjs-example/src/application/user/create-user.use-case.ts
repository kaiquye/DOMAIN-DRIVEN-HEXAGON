import {
  ICreateUserInput,
  ICreateUserOutPut,
  ICreateUserUseCase,
} from './interfaces/create-user-use-case.interface';
import { IUseRepository } from './repository/use-repository.interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/user/user.model';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserAlreadyException } from '../../domain/user/exceptions/user-already.exception';
import { Result } from '../../infra/adapters/response.adapters';
import { UserCreatedEvent } from '../../domain/user/events/user-created.event';
import { QueueAdapter } from '../../infra/adapters/queue.adapter';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @Inject('user-rep')
    private useRep: IUseRepository,
    @QueueAdapter()
    private queue: EventEmitter2,
  ) {}

  async perform(input: ICreateUserInput): Promise<Result<ICreateUserOutPut>> {
    const userAlreadyExists = await this.useRep.findByEmail(input.email);
    if (userAlreadyExists) {
      throw new UserAlreadyException();
    }

    const newUser = User.create(input);
    await newUser.passwordToHash();

    await this.useRep.save(newUser);

    const eventProps = {
      name: newUser.fistName,
      email: newUser.email,
      password: newUser.password,
    };
    this.queue.emit('user.created', new UserCreatedEvent(eventProps));

    return Result.Created<ICreateUserOutPut>({
      id: newUser.id,
      message: 'user created.',
    });
  }
}
