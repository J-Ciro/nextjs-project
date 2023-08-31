import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { CommentSchema } from './comment.schema';

@Schema({
  timestamps: true,
})
export class Post {
  @Prop([{ type: CommentSchema }])
  usersComments: Comment[];
  @Prop({})
  photo: string;

  @Prop({
    required: true,
  })
  name: string;
  @Prop({})
  email: string;

  @Prop({
    trim: true,
  })
  title: string;
  @Prop()
  description: string;
  @Prop({})
  likes: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
