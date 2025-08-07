import { Module } from '@nestjs/common';
import { ThanaController } from './thana.controller';
import { ThanaService } from './thana.service';

@Module({
  controllers: [ThanaController],
  providers: [ThanaService]
})
export class ThanaModule {}
