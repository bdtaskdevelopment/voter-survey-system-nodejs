import { Module } from '@nestjs/common';
import { CenterController } from './center.controller';
import { CenterService } from './center.service';

@Module({
  controllers: [CenterController],
  providers: [CenterService]
})
export class CenterModule {}
