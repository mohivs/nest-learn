import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Header,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './Dtos/create-user.dto';
import { GetUsersParamsDto } from './Dtos/get-users-params.dto';
import { PatchUserDto } from './Dtos/patch-user.dto';
import { userService } from './providers/user.service';

/**
 * final endpoint /users/id?limit=10&page=1
 * param id - optional , convert to integer , cannot have deafult value
 * Query limit - integer , deafult 10
 * Query page - integer , deafult 1
 * ===> use cases
 * /users/ --> return all userswith deafult pagination
 * /users/123 --> return one user whos id is 123
 * /users?limit=10&page=2 --> return page 2 with limit of pagination 10
 */

@Controller('users')
export class UsersController {
  constructor(private userService: userService) {}
  @Get('/:id?')
  test(
    @Param() param: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    // console.log(page, limit);
  }

  @Post()
  test2(@Req() req: Request, @Body() body: CreateUserDto) {
    console.log(body);
  }

  @Patch()
  patchUser(@Body() body: PatchUserDto) {
    console.log(body);
  }
}
