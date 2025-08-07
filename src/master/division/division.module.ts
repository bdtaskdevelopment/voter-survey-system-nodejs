import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionController } from './division.controller';
import { DivisionService } from './division.service';
import { Division } from './entities/division.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Division])],
  controllers: [DivisionController],
  providers: [DivisionService],
  exports: [DivisionService],
})
export class DivisionModule {}
