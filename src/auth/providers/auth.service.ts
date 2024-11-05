import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as argon from 'argon2';
import { User } from '../schemas/user.shcema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../Dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    // @Inject(forwardRef(() => userService))
    // private userservice: userService,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwt: JwtService,
    private readonly configservice: ConfigService,
  ) {}

  async signup(body: CreateUserDto) {
    const user = await this.userModel.findOne({ email: body.email });

    if (user) {
      throw new BadRequestException('قبلا ثبت نام کردی');
    }

    const hashPass = await argon.hash(`${body.password}`);

    const accessToken = await this.jwt.signAsync(
      { name: body.name },
      { secret: this.configservice.get('SECRET'), expiresIn: '1d' },
    );

    console.log(accessToken);

    this.userModel.create({ ...body, password: hashPass });

    return {
      status: 200,
      success: true,
      message: 'ثبت نام با موفقیت انجام شد',
      accessToken,
    };
  }

  // async hashing(userPass: string) {
  //   const hash = await argon.hash(userPass);
  //   return hash;
  // }

  // async verifying(email, userPass) {
  //   console.log(email);
  //   // const user = await this.userservice.findAll();
  //   console.log(user);
  //   return user;
  //   // try {
  //   //   if (await argon.verify(databasePass, userPass)) {
  //   //     // password match
  //   //   } else {
  //   //     // password did not match
  //   //   }
  //   // } catch (err) {
  //   //   // internal failure
  //   // }
  // }
}
