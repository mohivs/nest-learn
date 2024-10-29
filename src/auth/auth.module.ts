import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UsersModule } from 'src/users/users.module';

import { MyhashProvider } from './providers/myhash.provider';
import { HashingProvider } from './providers/hashing.provider';
import { BcryptProvider } from './providers/bcrypt.provider';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    MyhashProvider,
    { provide: HashingProvider, useClass: BcryptProvider },
  ],
  exports: [AuthService, MyhashProvider, HashingProvider],
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
