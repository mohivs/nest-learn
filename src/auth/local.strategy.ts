import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.shcema';
import { Model } from 'mongoose';
import { AuthService } from './providers/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authservice: AuthService,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (user) {
      return this.authservice.login(email, password);
    }
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
