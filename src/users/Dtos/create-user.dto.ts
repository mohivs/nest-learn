import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'حداقل سه کلمه بنویسید' })
  firstName: string;

  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @MinLength(8)
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
