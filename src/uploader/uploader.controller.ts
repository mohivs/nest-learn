import {
  StorageFile,
  UploadedFile,
  FileInterceptor,
} from '@blazity/nest-file-fastify';
import {
  BadRequestException,
  Controller,
  FileTypeValidator,
  HttpStatus,
  MaxFileSizeValidator,
  ParseFilePipe,
  ParseFilePipeBuilder,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { FileFormatValidationPipe } from 'src/Test';

@Controller('uploader')
export class UploaderController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { dest: 'src/upload' }))
  async uploadFile(
    @UploadedFile(
      new FileFormatValidationPipe(),
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1000,
            message: 'حجم فایل باید کم باشد',
          }),
        ],
      }),
    )
    file: StorageFile,
  ) {
    console.log(file.size);
  }

  @Post('upload2')
  @UseInterceptors(FileInterceptor('file', { dest: 'src/upload' }))
  async upladfile2(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        .addMaxSizeValidator({
          maxSize: 1000,
        })
        .build({
          errorHttpStatusCode: HttpStatus['ریده'],
        }),
    )
    file: Express.Multer.File,
  ) {}

  @Post('regular')
  async test(@Req() req) {
    const data = await req.file();
    const buffer = await data.toBuffer();

    console.log(buffer.length);
  }
}
