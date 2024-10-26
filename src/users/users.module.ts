import { Controller, forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { userService } from './providers/user.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, testSchema } from './test.schema';

@Module({
  controllers: [UsersController],
  providers: [userService],
  exports: [userService],
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: testSchema }]),
    forwardRef(() => AuthModule),
  ],
})
export class UsersModule {}
