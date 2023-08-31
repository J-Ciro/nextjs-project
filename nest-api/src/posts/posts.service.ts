import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/post.schema';
import { CreatePostDto } from '../dto/create-post.dto';
import { CommentDocument } from 'src/schemas/comment.schema';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { UpdatePostDto } from 'src/dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}


  findAll() {
    return this.postModel.find();
  }

  async addComment(createComment: CreateCommentDto){
    const newPost = new this.postModel(createComment);
    return newPost.save();
  }

  async create(createPost: CreatePostDto) {
    const newPost = new this.postModel(createPost);
    return newPost.save();
  }

  async findOne(id: string) {
    return this.postModel.findById(id);
  }
  async delete(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }

  async update(id: string, createTaskDto: UpdatePostDto): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, createTaskDto, { new: false });
  }
  
  
}
