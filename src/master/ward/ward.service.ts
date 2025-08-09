import { Injectable } from '@nestjs/common';
import { BaseService } from '../../common/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ward } from './entities/ward.entity';

@Injectable()
export class WardService extends BaseService<Ward> {
  constructor(
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
  ) {
    super(wardRepository);
  }

  async findByThanaId(thanaId: number) {
    // return await this.wardRepository.find({ where: { thana_id: thanaId } });

  }

}
