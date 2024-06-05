import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GBSenbakuro } from './entities/GBSenbakuro.entity';
import { CreateGBSenbakuroDto } from './dto/createGBSenbakuro.dto'; // CreateGBSenbakuroDto를 사용하기 위해 import
import { UpdateGBSenbakuroDto } from './dto/updateGBSenbakuro.dto';

@Injectable()
export class GBSenbakuroService {
  constructor(
    @InjectRepository(GBSenbakuro)
    private GBSenbakuroRepository: Repository<GBSenbakuro>,
  ) {}

  /* async findByGuideBookAllKey(guideBookAllKey: number): Promise<GBSenbakuro[]> {
    return this.GBSenbakuroRepository.find({ where: { GuideBookAllKey: guideBookAllKey } });
  } */

  async createGBSenbakuro(GBSenbakuro: CreateGBSenbakuroDto): Promise<GBSenbakuro> {
    const newGBSenbakuro = this.GBSenbakuroRepository.create(GBSenbakuro);
    return await this.GBSenbakuroRepository.save(newGBSenbakuro);
  }

  async findAll(): Promise<GBSenbakuro[]> {
    return this.GBSenbakuroRepository.find();
  }

  /* async findOne(id: number): Promise<GBSenbakuro> {
    const GBSenbakuro = await this.GBSenbakuroRepository.findOne({where: { GuideBookAllKey:id }});
    if (!GBSenbakuro) {
      throw new NotFoundException('not found');
    }
    return GBSenbakuro;
  }

  async update(id: number, updateGBSenbakuroDto: UpdateGBSenbakuroDto): Promise<GBSenbakuro> {
    const GBSenbakuro = await this.findOne(id);
    if (!GBSenbakuro) {
      throw new NotFoundException('not found');
    }
    Object.assign(GBSenbakuro, updateGBSenbakuroDto);
    return this.GBSenbakuroRepository.save(GBSenbakuro);
  }

  async remove(id: number): Promise<void> {
    const result = await this.GBSenbakuroRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`GBSenbakuro with ID "${id}" not found.`);
    }
  } */
}  