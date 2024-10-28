import { IsNotEmpty, IsString } from 'class-validator';

export class HashDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  password: string;
}
