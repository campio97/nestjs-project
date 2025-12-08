import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param-dto';
import { AuthService } from 'src/auth/providers/auth.service';
/**
 * Class to connect to Users table and perform business logic operations
 */
@Injectable()
export class UsersService {
  constructor(
    //Inject user service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  /**
   * The method to get all the users from database
   */
  public findAll(
    GetUsersParamDto: GetUsersParamDto,
    limit?: number,
    offset?: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

    return [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
      },
    ];
  }

  /**
   * Find user by id
   * @param id
   * @returns
   */
  public findById(id: string) {
    return {
      id: id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };
  }
}
