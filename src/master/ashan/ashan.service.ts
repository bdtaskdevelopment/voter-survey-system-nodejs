import { Injectable } from '@nestjs/common';
import { Ashan } from './entities/ashan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class AshanService extends BaseService<Ashan> {
  constructor(
    @InjectRepository(Ashan)
    private readonly ashanRepository: Repository<Ashan>,
  ) {
    super(ashanRepository);
  }

  // Override findAll to select specific fields
  async findAll(): Promise<Ashan[]> {
    return this.ashanRepository.find({
      select: ['id', 'name', 'district_id', 'division_id'],
    });
  }

  // Add custom methods specific to Ashan
  async findByDistrict(districtId: number): Promise<Ashan[]> {
    try {
      return await this.ashanRepository.find({
        where: { district_id: districtId },
        select: ['id', 'name'],
      });
    } catch (error) {
      console.error('Error fetching ashans by district:', error);
      return [];
    }
  }

  async findByDivision(divisionId: number): Promise<Ashan[]> {
    try {
      return await this.ashanRepository.find({
        where: { division_id: divisionId },
        select: ['id', 'name'],
      });
    } catch (error) {
      console.error('Error fetching ashans by division:', error);
      return [];
    }
  }
}
