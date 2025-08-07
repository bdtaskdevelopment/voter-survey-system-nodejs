import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Center } from './entities/center.entity';

@Injectable()
export class CenterService {
    constructor(
        @InjectRepository(Center)
        private readonly centerRepository: Repository<Center>,
    ) { }

    async create(centerData: Partial<Center>): Promise<Center> {
        const center = this.centerRepository.create(centerData);
        return this.centerRepository.save(center);
    }

    async findAll(): Promise<Center[]> {
        return this.centerRepository.find();
    }

    async findOne(id: number): Promise<Center | null> {
        return this.centerRepository.findOne({ where: { id } });
    }

    async update(id: number, updateData: Partial<Center>): Promise<Center | null> {
        await this.centerRepository.update(id, updateData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.centerRepository.delete(id);
    }
}
