import * as joi from 'joi';

export const VariablesConfig = {
  isGlobal: true,
  validationSchema: joi.object({
    PORT: joi.number().required(),
    NODE_ENV: joi
      .string()
      .valid('development', 'sandbox', 'production', 'test'),
    DATABASE_URL: joi.string().required(),
    SECRET_KEY: joi.string().required(),
  }),
};
