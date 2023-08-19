import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ICreateUserUseCase } from '../interfaces/create-user-use-case.interface';
import { CreateUserBodyDto } from './dtos/create-user.dto';
import { ILoginUseCase } from '../interfaces/signIn-user-use-case.interfaces';
import { LoginBodyDto } from './dtos/login-user.dto';

@Controller('/v1/user')
export class UserHttpController {
  constructor(
    @Inject('create-user')
    private createUserUseCase: ICreateUserUseCase,
    @Inject('login-user')
    private LoginUserUseCase: ILoginUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateUserBodyDto) {
    return this.createUserUseCase.perform(body);
  }

  @Post('/login')
  async login(@Body() body: LoginBodyDto) {
    return this.LoginUserUseCase.perform(body);
  }
}
