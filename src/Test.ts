import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class FileFormatValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const allowedMimeTypes = ['image/jpeg', 'image/jpg'];
    const isAccepted = allowedMimeTypes.includes(value.mimetype);

    if (!isAccepted) {
      throw new BadRequestException('فرمت فایل باید JPEG یا jpg باشد.');
    }

    return value;
  }
}
