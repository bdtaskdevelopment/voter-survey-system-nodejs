import { Controller, Get } from '@nestjs/common';
import { DivisionService } from './division.service';

@Controller('division')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @Get('/')
  async findAll() {
    const divisions = await this.divisionService.findAll();
    return {
      message: 'Divisions fetched successfully',
      data: divisions,
    };
  }
}
