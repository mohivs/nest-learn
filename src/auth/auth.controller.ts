import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { CreateUserDto } from 'src/auth/Dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: CreateUserDto) {
    const newUser = this.authService.signup(body);
    return newUser;
  }

  @Post('login')
  login(@Body() body: CreateUserDto) {
    // const { username, password } = body;
    // return this.myHash.verifying(username, password);
    // isAuth = this.myHash.verifying(email, password);
    // return hashedPass;
  }

  // @Post('/:id')
  // login(@Body() body: CreateUserDto, @Param('id') id: string) {
  //   const { email, password } = body;
  //   return this.authService.login(email, password, id);
  // }
}
