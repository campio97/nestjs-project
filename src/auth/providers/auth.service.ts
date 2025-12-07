import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    //Inject user service
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    const user = this.usersService.findById(id);
    // login
    return 'SAMPLE_TOKEN';
  }

  public isAuth(): boolean {
    return true;
  }
}
