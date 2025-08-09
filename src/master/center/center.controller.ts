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
import { CenterService } from './center.service';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { CreateCenterDto } from './dto/create-center.dto';

@Controller('center')
export class CenterController {

    constructor(private readonly centerService: CenterService) { }

    @Get('/')
    async findAll(@Query() paginationDto: PaginationDto) {
        try {
            const centers = await this.centerService.findAllWithPagination(paginationDto);
            return {
                message: 'Centers fetched successfully',
                data: centers,
            };
        } catch (error) {
            return {
                message: 'Failed to fetch centers',
                error: error.message,
            };
        }
    }

    @Post('/')
    async create(@Body() createDto: CreateCenterDto) {
        try {
            const center = await this.centerService.create(createDto);
            return {
                message: 'Center created successfully',
                data: center,
            };
        } catch (error) {
            return {
                message: 'Failed to create center',
                error: error.message,
            };
        }
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body() updateDto: CreateCenterDto) {
        try {
            const center = await this.centerService.update(id, updateDto);
            return {
                message: 'Center updated successfully',
                data: center,
            };
        } catch (error) {
            return {
                message: 'Failed to update center',
                error: error.message,
            };
        }
    }

    @Delete('/:id')
    async remove(@Param('id') id: number) {
        try {
            await this.centerService.remove(id);
            return {
                message: 'Center deleted successfully',
            };
        } catch (error) {
            return {
                message: 'Failed to delete center',
                error: error.message,
            };
        }
    }
}