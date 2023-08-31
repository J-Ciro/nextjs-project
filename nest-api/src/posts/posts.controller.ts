import {
  Controller,
  Get,
  Delete,
  Post,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
  Put
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { CommentService } from 'src/comments/comment.service';
import { UpdatePostDto } from 'src/dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }

  @Post()
  async create(@Body() body: CreatePostDto) {
    try {
      return await this.postsService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('El post ya existe');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const post = await this.postsService.delete(id);
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdatePostDto) {
    const post = await this.postsService.update(id, body);
    if (!post) throw new NotFoundException('Task does not exist!');
    return post;
  }


}
