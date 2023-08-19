import { Result } from 'src/infra/adapters/response.adapters';
import {
  ILoginUseCase,
  ILoginUserInput,
  ILoginUserOutput,
} from './interfaces/signIn-user-use-case.interfaces';
import { Inject } from '@nestjs/common';
import { IUseRepository } from './repository/use-repository.interfaces';
import { UserNotFoundException } from 'src/domain/user/exceptions/user-not-found.exception';
import { JwtService } from '@nestjs/jwt';
import { RolesAllowed } from 'src/@config/roles-allowed.config';

export class LoginUserUseCase implements ILoginUseCase {
  constructor(
    @Inject('user-rep')
    private readonly userRep: IUseRepository,
    private jwtService: JwtService,
  ) {}

  async perform(input: ILoginUserInput): Promise<Result<ILoginUserOutput>> {
    const userFound = await this.userRep.findByEmail(input.email);
    if (!userFound) {
      throw new UserNotFoundException();
    }

    const matchPassword = await userFound.isPasswordValid(input.password);
    if (!matchPassword) {
      throw new UserNotFoundException();
    }

    const payload = {
      id: userFound.id,
      email: userFound.email,
      claims: [RolesAllowed.READ, RolesAllowed.DELETE, RolesAllowed.WRITE], // find by db
    };
    const accessToken = await this.jwtService.signAsync(payload);

    return Result.Ok<ILoginUserOutput>({
      message: 'signInUserSuccess',
      accessToken,
      id: userFound.id,
    });
  }
}
