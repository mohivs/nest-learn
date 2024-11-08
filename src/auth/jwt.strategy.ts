import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.shcema';
import { Model } from 'mongoose';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: ConfigService,
    @InjectModel(User.name)
    private usermodel: Model<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //   ignoreExpiration: false,
      secretOrKey: config.get('SECRET'),
    });
  }

  async validate(payload: any) {
    console.log('hit from method');
    const user = await this.usermodel.findOne({ name: payload.name });
    return user;
  }
}
