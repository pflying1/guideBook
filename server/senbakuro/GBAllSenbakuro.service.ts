import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GBAllSenbakuro } from './entities/GBAllSenbakuro.entity';
import { CreateGBAllSenbakuroDto } from './dto/createGBAllSenbakuro.dto'; // CreateGBAllSenbakuroDto를 사용하기 위해 import
import { UpdateGBAllSenbakuroDto } from './dto/updateGBAllSenbakuro.dto';

@Injectable()
export class GBAllSenbakuroService {
  constructor(
    @InjectRepository(GBAllSenbakuro)
    private GBAllSenbakuroRepository: Repository<GBAllSenbakuro>,
  ) {}

  async createGBAllSenbakuro(GBAllSenbakuro: CreateGBAllSenbakuroDto): Promise<GBAllSenbakuro> {
    const newGBAllSenbakuro = this.GBAllSenbakuroRepository.create(GBAllSenbakuro);
    return await this.GBAllSenbakuroRepository.save(newGBAllSenbakuro);
  }

  async findAll(): Promise<GBAllSenbakuro[]> {
    return this.GBAllSenbakuroRepository.find();
  }

  async findOne(id: number): Promise<GBAllSenbakuro> {
    const GBAllSenbakuro = await this.GBAllSenbakuroRepository.findOne({where: { GuideBookAllKey:id }});
    if (!GBAllSenbakuro) {
      throw new NotFoundException('not found');
    }
    return GBAllSenbakuro;
  }

  async update(id: number, updateGBAllSenbakuroDto: UpdateGBAllSenbakuroDto): Promise<GBAllSenbakuro> {
    const GBAllSenbakuro = await this.findOne(id);
    if (!GBAllSenbakuro) {
      throw new NotFoundException('not found');
    }
    Object.assign(GBAllSenbakuro, updateGBAllSenbakuroDto);
    return this.GBAllSenbakuroRepository.save(GBAllSenbakuro);
  }

  async remove(id: number): Promise<void> {
    const result = await this.GBAllSenbakuroRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`GBAllSenbakuro with ID "${id}" not found.`);
    }
  }
}  