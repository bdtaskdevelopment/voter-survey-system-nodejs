import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { District } from './entities/district.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class DistrictService extends BaseService<District> {
  constructor(
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
  ) {
    super(districtRepository);
  }
}
