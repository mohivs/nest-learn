import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
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
    let existPost;
    try {
      existPost = this.postModel.findOne({ title: body.title });
      // if (existPost)
      //   throw new BadRequestException('تکراریه', { description: 'بد شد' });
    } catch (err) {
      throw new RequestTimeoutException('مشکلی پیش آمده', { description: err });
    }
    if (existPost)
      throw new BadRequestException('این عنوان قبلا استفاده شده است');

    this.postModel.create(body);
  }
}
