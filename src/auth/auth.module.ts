import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
// import { UsersModule } from 'src/users/users.module';

// import { MyhashProvider } from './providers/myhash.provider';
import { HashingProvider } from './providers/hashing.provider';
import { BcryptProvider } from './providers/bcrypt.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schemas/user.shcema';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JwtStrategy,
    AuthService,
    { provide: HashingProvider, useClass: BcryptProvider },
  ],
  exports: [AuthService, HashingProvider],
  imports: [
    PassportModule,
    JwtModule.register({}),
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
})
export class AuthModule {}
