import { Module } from '@nestjs/common';
import { CenterController } from './center.controller';
import { CenterService } from './center.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Center } from './entities/center.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Center]),
  ],
  controllers: [CenterController],
  providers: [CenterService]
})
export class CenterModule { }
