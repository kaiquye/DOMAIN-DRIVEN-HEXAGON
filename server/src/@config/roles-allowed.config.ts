import { SetMetadata } from '@nestjs/common';

export const enum RolesAllowed {
  READ = 'security.read',
  WRITE = 'security.write',
  DELETE = 'security.delete',
}

export const Scope = (roles: string[]) => SetMetadata('roles', roles);
