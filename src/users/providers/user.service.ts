import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';

const users = [
  { id: 123, name: 'ali', email: 'ali@test@getMaxListeners.com' },
  { id: 1234, name: 'mohsen', email: 'mohsen@test@getMaxListeners.com' },
];

@Injectable()
export class userService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authservice: AuthService,
    private readonly configService: ConfigService,
  ) {}
  findAll() {
    return users;
  }

  findOne(userId) {
    return users.find((user) => user.id == userId);
  }
}
