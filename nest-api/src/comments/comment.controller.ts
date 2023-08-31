import { Controller, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from 'src/dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':postId')
  async createComment(@Param('postId') postId: string, @Body() createCommentDto: CreateCommentDto) {
    try {
      return await this.commentService.createComment(createCommentDto);
    } catch (error) {
      throw new NotFoundException('Post not found');
    }
  }
}