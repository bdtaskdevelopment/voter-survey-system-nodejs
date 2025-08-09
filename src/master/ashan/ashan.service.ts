import { Injectable } from '@nestjs/common';
import { Ashan } from './entities/ashan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class AshanService extends BaseService<Ashan> {
  constructor(@InjectRepository(Ashan) private readonly ashanRepository: Repository<Ashan>) {
    super(ashanRepository);
  }

  async findByDistrictId(districtId: number) {
    return await this.ashanRepository.find({ where: { district_id: districtId } });
  }

  async findByDistrictAndDivision(districtId: number, divisionId: number) {
    return await this.ashanRepository.find({
      where: { division_id: divisionId, district_id: districtId },
    });
  }
}
