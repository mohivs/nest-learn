import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './Dto/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postservice: PostService,
    // private readonly userService: userService,
  ) {}

  @Get('/:userId')
  test(@Param('userId') userId: string) {
    return this.postservice.findAll(userId);
  }

  @Post()
  test2(@Body() body: CreatePostDto) {
    this.postservice.createTest(body);
    return body;
  }
}
