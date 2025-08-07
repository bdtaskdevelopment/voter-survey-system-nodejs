import { Module } from '@nestjs/common';
import { WardController } from './ward.controller';
import { WardService } from './ward.service';
import { Ward } from './entities/ward.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionModule } from '../division/division.module';
import { DistrictModule } from '../district/district.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ward]), DistrictModule, DivisionModule],
  controllers: [WardController],
  providers: [WardService],
  exports: [WardService],
})
export class WardModule {}
