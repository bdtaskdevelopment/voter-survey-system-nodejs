import { Controller, Get } from '@nestjs/common';
import { AshanService } from './ashan.service';

@Controller('ashan')
export class AshanController {
  constructor(private readonly ashanService: AshanService) {}

  @Get('/')
  async findAll() {
    const ashan = await this.ashanService.findAll();
    return {
      message: 'Ashans fetched successfully',
      data: ashan,
    };
  }
}
