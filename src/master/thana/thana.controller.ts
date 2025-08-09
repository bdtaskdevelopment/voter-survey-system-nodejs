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
import { ThanaService } from './thana.service';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Controller('thana')
export class ThanaController {
    constructor(private readonly thanaService: ThanaService) { }

    @Get('/')
    async findAll(@Query() paginationDto: PaginationDto) {
        try {
            const thanas = await this.thanaService.findAllWithPagination(paginationDto);
            return {
                message: 'Thanas fetched successfully',
                data: thanas,
            };
        } catch (error) {
            return {
                message: 'Failed to fetch Thanas',
                error: error.message,
            };
        }
    }

    @Get('/by-ashan/:ashanId')
    async findByAshan(@Param('ashanId') ashanId: number) {
        try {
            const thanas = await this.thanaService.findByAshanId(ashanId);
            return {
                message: 'Thanas fetched successfully by ashan',
                data: thanas,
            };
        } catch (error) {
            return {
                message: 'Failed to fetch Thanas by ashan',
                error: error.message,
            };
        }
    }
}
