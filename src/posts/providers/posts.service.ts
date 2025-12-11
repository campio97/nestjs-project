import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/createPost-posts.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    //Inject User Service
    private readonly usersService: UsersService,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
  public findAll(userId?: string) {
    const user = userId ? this.usersService.findById(userId) : null;

    return [
      {
        user: user,
        title: 'Post 1',
        content: 'Content 1',
      },
      {
        user: user,
        title: 'Post 2',
        content: 'Content 2',
      },
    ];
  }

  public async createPost(createPostDto: CreatePostDto) {
    let newPost = this.postsRepository.create(createPostDto);
    newPost = await this.postsRepository.save(newPost);

    return newPost;
  }
}
