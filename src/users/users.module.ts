import { Controller, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { userService } from './providers/user.service';

@Module({ controllers: [UsersController], providers: [userService] })
export class UsersModule {}
