import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class UploaderService {
  constructor(@InjectQueue('test') private testQueue: Queue) {}
}
