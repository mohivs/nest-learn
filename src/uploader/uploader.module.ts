import { Module } from '@nestjs/common';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [UploaderController],
  imports: [MulterModule.register({ dest: 'src/upload' })],
  providers: [UploaderService],
})
export class UploaderModule {}
