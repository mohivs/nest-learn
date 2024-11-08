import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { CreateUserDto } from 'src/auth/Dtos/create-user.dto';
import { Auth } from './decorators/auth.decorator';
import { authType } from './enums/auth-type.enum';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @SetMetadata('authType', 'none')
  @Post('signup')
  // @Auth(authType.None)
  signup(@Body() body: CreateUserDto) {
    const newUser = this.authService.signup(body);
    return newUser;
  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body: CreateUserDto, @Req() request, @Res() res) {
    const { email, password } = body;
    const result = await this.authService.login(email, password);

    res.cookie('jwt', result.accessToken, {
      expires: new Date(Date.now() + 500000),
      secure: true,
      // httpOnly: true,
    });
    res.status(result.status).send(result);

    return 'you are authirized';
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  test(@Req() request) {
    console.log('hit');
    return 'request';
  }

  // @Post('/:id')
  // login(@Body() body: CreateUserDto, @Param('id') id: string) {
  //   const { email, password } = body;
  //   return this.authService.login(email, password, id);
  // }
}
