import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('{/:userId}')
  //Only for demostrational purposes of dependency injection, we are not going to validate
  public getPosts(@Param('userId') userId?: string) {
    return this.postsService.findAll(userId);
  }
}
