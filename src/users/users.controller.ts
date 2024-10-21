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
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

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
  @Get('/:id?')
  test(
    @Param('id', ParseIntPipe) param: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(page, limit);
  }

  @Post()
  test2(@Req() req: Request) {
    console.log(req);
  }
  // @Post()
  // test2(@Body() body: any) {
  //   console.log(body);
  // }
}
