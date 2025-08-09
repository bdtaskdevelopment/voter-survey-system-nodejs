import { Controller, Get } from '@nestjs/common';
import { DivisionService } from './division.service';

@Controller('division')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) { }

  @Get('/')
  async findAll() {
    try {
      const divisions = await this.divisionService.findAll();
      return {
        message: 'Divisions fetched successfully',
        data: divisions,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch divisions',
        error: error.message,
      };
    }
  }
}
