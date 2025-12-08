import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/createPost-posts.dto';

@Injectable()
export class PostsService {
  constructor(
    //Inject User Service
    private readonly usersService: UsersService,
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

  public createPost(createPostDto: CreatePostDto) {
    return createPostDto;
  }
}
