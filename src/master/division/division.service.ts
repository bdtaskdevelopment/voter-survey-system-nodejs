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

  // Override findAll to select specific fields
  async findAll(): Promise<Division[]> {
    try {
      return await this.divisionRepository.find({
        select: ['id', 'name', 'is_active'],
      });
    } catch (error) {
      console.error('Error fetching divisions:', error);
      return [];
    }
  }

  // Add custom methods specific to Division
  async findByName(name: string): Promise<Division | null> {
    try {
      return await this.divisionRepository.findOne({ where: { name } });
    } catch (error) {
      console.error('Error fetching division by name:', error);
      return null;
    }
  }
}
