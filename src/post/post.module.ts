import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, postSchema } from './schema/post.schema';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: Post.name, schema: postSchema }]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
