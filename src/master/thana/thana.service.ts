import { Injectable } from '@nestjs/common';
import { Thana } from './entities/thana.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class ThanaService extends BaseService<Thana> {
    constructor(@InjectRepository(Thana) private readonly thanaRepository: Repository<Thana>) {
        super(thanaRepository);
    }

    async findByAshanId(ashanId: number) {
        return await this.thanaRepository.find({ where: { ashan_id: ashanId } });
    }
}
