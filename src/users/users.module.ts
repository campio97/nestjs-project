import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService], //Provide the service to all the local components (like controller). INTRA MODULE INJECTION
})
export class UsersModule {}
