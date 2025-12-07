import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param-dto';

@Injectable()
export class UsersService {
  public findAll(
    GetUsersParamDto: GetUsersParamDto,
    limit?: number,
    offset?: number,
  ) {
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
  public findById(id: number) {
    return {
      id: id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };
  }
}
