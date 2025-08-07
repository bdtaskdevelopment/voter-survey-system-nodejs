import { Module } from '@nestjs/common';
import { AshanController } from './ashan.controller';
import { AshanService } from './ashan.service';

@Module({
  controllers: [AshanController],
  providers: [AshanService]
})
export class AshanModule {}
