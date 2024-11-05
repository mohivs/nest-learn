import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';

// @UseGuards(AccessTokenGuard)
@Controller('protected')
export class ProtectedController {
  @Get()
  see() {
    return 'you are authorized';
  }
}
