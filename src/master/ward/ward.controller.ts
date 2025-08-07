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
import { WardService } from './ward.service';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { WardCreateDto } from './dto/ward-create.dto';
import { WardUpdateDto } from './dto/ward-update.dto';

@Controller('ward')
export class WardController {
  constructor(private readonly wardService: WardService) {}

  @Get('/')
  async findAll(@Query() paginationDto: PaginationDto) {
    const wards = await this.wardService.findAllWithPagination(paginationDto);
    return {
      message: 'Wards fetched successfully',
      data: wards,
    };
  }

  @Post('/')
  async create(@Body() createDto: WardCreateDto) {
    const ward = await this.wardService.create(createDto);
    return {
      message: 'Ward created successfully',
      data: ward,
    };
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateDto: WardUpdateDto) {
    const ward = await this.wardService.update(id, updateDto);
    return {
      message: 'Ward updated successfully',
      data: ward,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    await this.wardService.remove(id);
    return {
      message: 'Ward deleted successfully',
    };
  }
}
