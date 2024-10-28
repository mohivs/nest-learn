import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UsersModule } from 'src/users/users.module';

import { MyhashProvider } from './providers/myhash.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthService, MyhashProvider],
  exports: [AuthService],
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
