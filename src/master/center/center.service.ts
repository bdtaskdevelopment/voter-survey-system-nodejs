import { Injectable } from '@nestjs/common';
import { Center } from './entities/center.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class CenterService extends BaseService<Center> {
    constructor(@InjectRepository(Center) centerRepository: Repository<Center>) {
        super(centerRepository);
    }
}
