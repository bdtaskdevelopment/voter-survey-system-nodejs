import { Injectable } from '@nestjs/common';
import { Division } from './entities/division.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class DivisionService extends BaseService<Division> {
  constructor(
    @InjectRepository(Division)
    private readonly divisionRepository: Repository<Division>,
  ) {
    super(divisionRepository);
  }
}
