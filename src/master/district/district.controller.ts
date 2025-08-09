import { Controller, Get, Query } from '@nestjs/common';
import { DistrictService } from './district.service';

@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) { }

  @Get('/')
  async findAll() {
    try {
      const districts = await this.districtService.findAll();
      return {
        message: 'Districts fetched successfully',
        data: districts,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch districts',
        error: error.message,
      };
    }
  }

  @Get('/by-division')
  async findByDivision(@Query('divisionId') divisionId: number) {
    try {
      if (!divisionId) {
        return {
          message: 'divisionId is required',
          data: [],
        };
      }

      const districts = await this.districtService.findByDivisionId(divisionId);
      return {
        message: 'Districts fetched successfully',
        data: districts,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch districts',
        error: error.message,
      };
    }
  }
}
