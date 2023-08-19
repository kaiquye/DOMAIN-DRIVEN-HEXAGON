import { IsEmail, IsString } from 'class-validator';

export class LoginBodyDto {
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
}
