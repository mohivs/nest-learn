import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  test(@Param() param: any) {
    return param;
  }
}
