import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  controllers: [UsersController],
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])],
  providers: [UsersService], //Provide the service to all the local components (like controller). INTRA MODULE INJECTION
  exports: [UsersService], //Export the service to other modules. INTER MODULE INJECTION. Only this service is available to other modules
})
export class UsersModule {}
