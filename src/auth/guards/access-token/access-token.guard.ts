import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1) extract request
    const request = context.switchToHttp().getRequest();
    // 2) extract token
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    // console.log(token);
    // 3) validate token
    if (!token) throw new UnauthorizedException();
    try {
      const payload = await this.jwt.verifyAsync(token, {
        secret: this.configService.get('SECRET'),
      });
      request['user'] = payload;
      console.log(payload);
    } catch (err) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
