import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

//This automatically makes all properties optional
export class PatchUserDto extends PartialType(CreateUserDto) {}
