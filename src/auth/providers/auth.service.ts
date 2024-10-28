import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { userService } from 'src/users/providers/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => userService))
    private userservice: userService,
  ) {}
  public login(email: string, password: string, id: string) {
    const user = this.userservice.findOne(id);
    // check user is exist in database
    // login
    // return token
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
