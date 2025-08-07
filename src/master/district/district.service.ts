import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { District } from './entities/district.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
  ) {}

  async findAll(): Promise<District[]> {
    try {
      return await this.districtRepository.find({
        select: ['id', 'name', 'division_id'],
      });
    } catch (error) {
      console.error('Error fetching districts:', error);
      return [];
    }
  }
}
