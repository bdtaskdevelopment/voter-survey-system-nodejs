import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Param,
} from '@nestjs/common';
import { AshanService } from './ashan.service';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { AshanCreateDto } from './dto/ashan-create.dto';
import { AshanUpdateDto } from './dto/ashan-update.dto';

@Controller('ashan')
export class AshanController {
  constructor(private readonly ashanService: AshanService) {}

  @Get('/')
  async findAll(@Query() paginationDto: PaginationDto) {
    const ashan = await this.ashanService.findAllWithPagination(paginationDto);
    return {
      message: 'Ashans fetched successfully',
      data: ashan,
    };
  }

  @Post('/')
  async create(@Body() createDto: AshanCreateDto) {
    const ashan = await this.ashanService.create(createDto);
    return {
      message: 'Ashan created successfully',
      data: ashan,
    };
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateDto: AshanUpdateDto) {
    const ashan = await this.ashanService.update(id, updateDto);
    return {
      message: 'Ashan updated successfully',
      data: ashan,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    await this.ashanService.remove(id);
    return {
      message: 'Ashan deleted successfully',
    };
  }
}
