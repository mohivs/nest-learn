import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ type: String })
  title: string;
}

export const postSchema = SchemaFactory.createForClass(Post);
