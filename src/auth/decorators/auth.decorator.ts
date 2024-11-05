import { SetMetadata } from '@nestjs/common';
import { authType } from '../enums/auth-type.enum';

export const Auth = (...authTypes: authType[]) =>
  SetMetadata('auth', authTypes);
