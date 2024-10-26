import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { userService } from 'src/users/providers/user.service';
import { Post } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto } from './Dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    private userService: userService,
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}
  public findAll(userId: string) {
    return this.userService.findOne(userId);
  }

  createTest(body: CreatePostDto) {
    this.postModel.create(body);
  }
}
