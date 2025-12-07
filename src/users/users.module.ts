import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService], //Provide the service to all the local components (like controller). INTRA MODULE INJECTION
  exports: [UsersService], //Export the service to other modules. INTER MODULE INJECTION. Only this service is available to other modules
})
export class UsersModule {}
