import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

import { ValidateEmailService } from './services/validate-email.service';
import { ValidatePasswordService } from './services/validate-password.service';
import { ValidateFistNameService } from './services/validate-fistName.service';
import { ICreateUserInput } from '../../application/user/interfaces/create-user-use-case.interface';
import { USER_STATUS } from '@prisma/client';
import { Wallet } from '../wallet/wallet.model';
import { InvalidEmailException } from './exceptions/invalid-email.exception';

export interface ICreateUserDomainProps {
  fistName: string;
  lastName?: string;
  status?: string;
  email: string;
  password: string;
  wallets?: Wallet;
}

export class User {
  public id: string;
  public fistName: string;
  public lastName?: string;
  public status?: USER_STATUS;
  public email: string;
  public password: string;
  public wallets: Wallet[];

  constructor(
    id: string,
    fistName: string,
    lastName: string | null,
    email: string,
    password: string,
    status?: USER_STATUS,
    wallet?: Wallet[],
  ) {
    this.id = id;
    this.fistName = fistName;
    this.lastName = lastName;
    this.email = email;
    this.status = status;
    this.password = password;
    this.wallets = wallet;
  }

  static create(props: ICreateUserDomainProps) {
    if (!ValidateEmailService(props.email)) {
      throw new InvalidEmailException('invalid email');
    }
    if (!ValidatePasswordService(props.password)) {
      throw new Error('invalid password');
    }
    if (!ValidateFistNameService(props.fistName)) {
      throw new Error('invalid password');
    }

    const id = uuidv4();
    return new User(
      id,
      props.fistName,
      props.lastName,
      props.email,
      props.password,
    );
  }

  async passwordToHash(): Promise<string> {
    // return bcrypt.hash(this.password, 12345);
    return this.password;
  }

  async isPasswordValid(passwordHash: string): Promise<boolean> {
    // return await bcrypt.compare(this.password, passwordHash);
    return true;
  }

  activateUser() {
    if (this.wallets.length < 2) {
      this.status = USER_STATUS.ACTIVE;
      return;
    }
    throw new Error('you cannot have more than two account open');
  }

  static toDomain(data: Partial<User> & ICreateUserInput): User {
    const tt = data[`Wallet`]?.map(({ accountHistory, ...wallet }) => {
      return {
        ...wallet,
        accountHistory: JSON.parse(accountHistory),
      };
    });

    return new User(
      data.id,
      data.fistName,
      data?.lastName,
      data.email,
      data.password,
      data.status,
      tt,
    );
  }

  static toView(data: Partial<User>): User {
    return undefined;
  }
}
