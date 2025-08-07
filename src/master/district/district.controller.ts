import { Controller, Get } from '@nestjs/common';
import { DistrictService } from './district.service';

@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Get('/')
  async findAll() {
    const districts = await this.districtService.findAll();
    return {
      message: 'Districts fetched successfully',
      data: districts,
    };
  }
}
