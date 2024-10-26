import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/Dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/:id')
  login(@Body() body: CreateUserDto, @Param('id') id: string) {
    const { email, password } = body;
    return this.authService.login(email, password, id);
  }
}
