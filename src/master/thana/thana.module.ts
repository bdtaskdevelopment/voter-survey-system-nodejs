import { Module } from '@nestjs/common';
import { ThanaController } from './thana.controller';
import { ThanaService } from './thana.service';
import { Thana } from './entities/thana.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Thana])],
  controllers: [ThanaController],
  providers: [ThanaService]
})
export class ThanaModule { }
