import { Constants } from './constants.config';

export const JwtConfig = {
  global: true,
  secret: Constants.SECRET_KEY,
  signOptions: { expiresIn: '460s' },
};
