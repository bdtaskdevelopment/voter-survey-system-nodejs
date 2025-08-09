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
  constructor(private readonly ashanService: AshanService) { }

  @Get('/')
  async findAll(@Query() paginationDto: PaginationDto) {
    try {
      const ashan = await this.ashanService.findAllWithPagination(paginationDto);
      return {
        message: 'Ashans fetched successfully',
        data: ashan,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch Ashans',
        error: error.message,
      };
    }
  }

  @Post('/')
  async create(@Body() createDto: AshanCreateDto) {
    try {
      const ashan = await this.ashanService.create(createDto);
      return {
        message: 'Ashan created successfully',
        data: ashan,
      };
    } catch (error) {
      return {
        message: 'Failed to create Ashan',
        error: error.message,
      };
    }
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateDto: AshanUpdateDto) {
    try {
      const ashan = await this.ashanService.update(id, updateDto);
      return {
        message: 'Ashan updated successfully',
        data: ashan,
      };
    } catch (error) {
      return {
        message: 'Failed to update Ashan',
        error: error.message,
      };
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    try {
      await this.ashanService.remove(id);
      return {
        message: 'Ashan deleted successfully',
      };
    } catch (error) {
      return {
        message: 'Failed to delete Ashan',
        error: error.message,
      };
    }
  }

  @Get('/by-district/:districtId')
  async findByDistrict(@Param('districtId') districtId: number) {
    try {
      const ashan = await this.ashanService.findByDistrictId(districtId);
      return {
        message: 'Ashans fetched successfully by district',
        data: ashan,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch Ashans by district',
        error: error.message,
      };
    }
  }

  @Get('/by-district-division')
  async findByDistrictAndDivision(
    @Query('districtId') districtId: number,
    @Query('divisionId') divisionId: number,
  ) {
    try {
      if (!districtId || !divisionId) {
        return {
          message: 'districtId and divisionId are required',
          data: [],
        };
      }

      const ashan = await this.ashanService.findByDistrictAndDivision(
        districtId,
        divisionId,
      );
      return {
        message: 'Ashans fetched successfully by district and division',
        data: ashan,
      };
    } catch (error) {
      return {
        message: 'Failed to fetch Ashans by district and division',
        error: error.message,
      };
    }
  }

}
