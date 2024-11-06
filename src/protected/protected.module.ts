import { Module } from '@nestjs/common';
import { ProtectedController } from './protected.controller';
import { ProtectedService } from './protected.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { AuthenticationGuard } from 'src/auth/guards/authentication/authentication.guard';

@Module({
  controllers: [ProtectedController],
  imports: [JwtModule.register({})],
  providers: [
    ProtectedService,
    { provide: APP_GUARD, useClass: AuthenticationGuard },
    AccessTokenGuard,
  ],
})
export class ProtectedModule {}
