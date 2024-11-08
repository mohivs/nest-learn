import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

// @UseGuards(AccessTokenGuard)
@UseGuards(JwtAuthGuard)
@Controller('protected')
export class ProtectedController {
  @Get()
  see() {
    return 'you are authorized';
  }

  @UseGuards(LocalAuthGuard)
  @Post()
  test() {
    return 'hi there';
  }
}
