import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { CreateUserDto } from 'src/users/Dtos/create-user.dto';
import { HashDto } from './Dtos/signup.dto';
import { MyhashProvider } from './providers/myhash.provider';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly myHash: MyhashProvider,
  ) {}

  @Post('signup')
  signup(@Body() body: HashDto) {
    const hashedPass = this.myHash.hashing(body.password);
    return hashedPass;
  }

  @Post('login')
  login(@Body() body: HashDto) {
    isAuth = this.myHash.
    return hashedPass;
  }

  @Post('/:id')
  login(@Body() body: CreateUserDto, @Param('id') id: string) {
    const { email, password } = body;
    return this.authService.login(email, password, id);
  }
}
