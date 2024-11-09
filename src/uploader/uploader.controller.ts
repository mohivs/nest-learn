import {
  BadRequestException,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('uploader')
export class UploaderController {
  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'file1', maxCount: 1 },
        { name: 'file2', maxCount: 1 },
      ],
      // {
      //   dest: 'src/upload',
      // },
    ),
  )
  async uploadFile(
    @UploadedFiles()
    // new ParseFilePipe({
    //   validators: [
    //     new FileTypeValidator({ fileType: 'image/jpeg' }),
    //     // new MaxFileSizeValidator({
    //     //   maxSize: 1.5 * 1024 * 1024,
    //     //   message: 'فایل نباید بیشتر از 1.5 مگ باشد',
    //     // }),
    //   ],
    //   // errorHttpStatusCode: 404,
    //   // fileIsRequired: false,
    // }),
    file: {
      file1?: Express.Multer.File[];
      file2?: Express.Multer.File[];
    },
  ) {
    // console.log(file);
    return file;
  }
}
