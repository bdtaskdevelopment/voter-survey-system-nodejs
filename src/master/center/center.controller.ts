import { Controller, Post, Body } from '@nestjs/common';
import { CenterService } from './center.service';

@Controller('center')
export class CenterController {

    constructor(private readonly centerService: CenterService) { }

    @Post('create')
    create(@Body() createCenterDto: any) {
        const center = this.centerService.create(createCenterDto);
        return { message: 'Center created successfully', data: center };
    }
}