import { Module } from '@nestjs/common';
import { DivisionModule } from './division/division.module';
import { DistrictModule } from './district/district.module';
import { PartyModule } from './party/party.module';
import { ThanaModule } from './thana/thana.module';
import { AshanModule } from './ashan/ashan.module';
import { CenterModule } from './center/center.module';
import { UnionModule } from './union/union.module';
import { WardModule } from './ward/ward.module';

@Module({
  imports: [
    DivisionModule,
    DistrictModule,
    PartyModule,
    ThanaModule,
    AshanModule,
    CenterModule,
    UnionModule,
    WardModule,
  ],
})
export class MasterModule {}
