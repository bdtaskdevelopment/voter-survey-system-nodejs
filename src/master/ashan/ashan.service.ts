import { Injectable } from '@nestjs/common';
import { Ashan } from './entities/ashan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class AshanService extends BaseService<Ashan> {
  constructor(@InjectRepository(Ashan) ashanRepository: Repository<Ashan>) {
    super(ashanRepository);
  }
}
