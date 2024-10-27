import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ type: String, unique: true })
  title: string;

  @Prop()
  email: string;
}

export const postSchema = SchemaFactory.createForClass(Post);
