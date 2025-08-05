import { Controller, Post, Body } from '@nestjs/common';
import { CreateControlDto } from './dto/create-control.dto';

@Controller('api/control')
export class BackendController {
    @Post('create')
    create(@Body() createControlDto: CreateControlDto) {

        return {
            message: 'Control created successfully',
            data: createControlDto,
        };
    }
}