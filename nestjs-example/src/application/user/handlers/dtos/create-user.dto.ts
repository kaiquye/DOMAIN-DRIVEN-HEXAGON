import { ICreateUserInput } from '../../interfaces/create-user-use-case.interface';
import { IsString } from 'class-validator';

export class CreateUserBodyDto {
  @IsString()
  email: string;
  @IsString()
  fistName: string;
  @IsString()
  lastName: string;
  @IsString()
  password: string;
}
