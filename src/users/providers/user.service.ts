import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  serviceTest() {
    return 'hello from service';
  }
}
