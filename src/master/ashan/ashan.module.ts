import { Module } from '@nestjs/common';
import { AshanController } from './ashan.controller';
import { AshanService } from './ashan.service';
import { Ashan } from './entities/ashan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionModule } from '../division/division.module';
import { DistrictModule } from '../district/district.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ashan]), DivisionModule, DistrictModule],
  controllers: [AshanController],
  providers: [AshanService],
  exports: [AshanService],
})
export class AshanModule {}
