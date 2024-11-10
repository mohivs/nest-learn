import { Module } from '@nestjs/common';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';
import { MulterModule } from '@nestjs/platform-express';
import { BullModule } from '@nestjs/bullmq';

@Module({
  controllers: [UploaderController],
  imports: [
    MulterModule.register({ dest: 'src/upload' }),
    BullModule.registerQueue({ name: 'test' }),
  ],
  providers: [UploaderService],
})
export class UploaderModule {}
