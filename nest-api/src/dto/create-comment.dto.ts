import { IsString, IsOptional, IsNotEmpty } from "class-validator";

export class CreateCommentDto {
 @IsNotEmpty()
  postId: number;
  @IsNotEmpty()
  commentId: number;
  text: string;
  @IsNotEmpty()
  name: string;
  }