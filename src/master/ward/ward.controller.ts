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
  constructor(private readonly wardService: WardService) { }

  @Get('/')
  async findAll(@Query() paginationDto: PaginationDto) {
    try {
      const wards = await this.wardService.findAllWithPagination(paginationDto);
      return {
        message: 'Wards fetched successfully',
        data: wards,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch wards',
        error: error.message,
      };
    }
  }

  @Post('/')
  async create(@Body() createDto: WardCreateDto) {
    try {
      const ward = await this.wardService.create(createDto);
      return {
        message: 'Ward created successfully',
        data: ward,
      };
    } catch (error) {
      return {
        message: 'Failed to create ward',
        error: error.message,
      };
    }
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateDto: WardUpdateDto) {
    try {
      const ward = await this.wardService.update(id, updateDto);
      return {
        message: 'Ward updated successfully',
        data: ward,
      };
    } catch (error) {
      return {
        message: 'Failed to update ward',
        error: error.message,
      };
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    try {
      await this.wardService.remove(id);
      return {
        message: 'Ward deleted successfully',
      };
    } catch (error) {
      return {
        message: 'Failed to delete ward',
        error: error.message,
      };
    }
  }

  @Get('/by-thana/:thanaId')
  async findByThana(@Param('thanaId') thanaId: number) {
    try {
      const wards = await this.wardService.findByThanaId(thanaId);
      return {
        message: 'Wards fetched successfully by thana',
        data: wards,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch wards by thana',
        error: error.message,
      };
    }
  }

}
