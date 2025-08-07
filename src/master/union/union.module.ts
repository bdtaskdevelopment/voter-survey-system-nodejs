import { Module } from '@nestjs/common';
import { UnionController } from './union.controller';
import { UnionService } from './union.service';

@Module({
  controllers: [UnionController],
  providers: [UnionService]
})
export class UnionModule {}
