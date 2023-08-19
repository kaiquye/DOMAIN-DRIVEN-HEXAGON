import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Constants } from 'src/@config/constants.config';

@Injectable()
export class AuthGuards implements CanActivate {
  private readonly acceptedTypes = ['Bearer'];
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const [type, token] = req.headers.authorization?.split(' ') ?? [];

    if (!this.acceptedTypes.includes(type)) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: Constants.SECRET_KEY,
      });
      req['user'] = payload;
    } catch (exception) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
