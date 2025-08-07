import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictController } from './district.controller';
import { DistrictService } from './district.service';
import { District } from './entities/district.entity';
import { DivisionModule } from '../division/division.module';

@Module({
  imports: [TypeOrmModule.forFeature([District]), DivisionModule],
  controllers: [DistrictController],
  providers: [DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
