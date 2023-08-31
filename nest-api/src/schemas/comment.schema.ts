import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
  @Prop({
    
  })
  postId: number;
  @Prop()
  commentId: number;
  @Prop()
  text: string;
  @Prop()
  name: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
export type CommentDocument = Comment & Document;