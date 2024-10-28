import { forwardRef, Inject, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { userService } from 'src/users/providers/user.service';

@Injectable()
export class MyhashProvider {
  constructor(
    @Inject(forwardRef(() => userService))
    private userservice: userService,
  ) {}
  async hashing(userPass: string) {
    const hash = await argon.hash(userPass);
    return hash;
  }

  async verifying(userPass: string) {
    const databasePass = await this.userservice.findOne({password:});
    try {
      if (await argon.verify(databasePass, userPass)) {
        // password match
      } else {
        // password did not match
      }
    } catch (err) {
      // internal failure
    }
  }
}
