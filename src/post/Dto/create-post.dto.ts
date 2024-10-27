import {
  IsArray,
  IsEmail,
  IsEnum,
  isEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { postStatus } from '../enums/status.enum';

export class CreatePostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsEmail()
  email: string;

  // @IsEnum(postStatus, { message: 'ولیو باید یکی از این 4 مورد باشه' })
  // status: postStatus;

  // @IsISO8601()
  // publishedOn: Date;

  // @IsArray()
  // @IsString({ each: true })
  // @MinLength(3, { each: true })
  // tags: string[];
}
