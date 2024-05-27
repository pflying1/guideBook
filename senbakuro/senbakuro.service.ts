import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Senbakuro } from './entities/senbakuro.entity';
import { CreateSenbakuroDto } from './dto/createSenbakuro.dto'; // CreatesenbakuroDto를 사용하기 위해 import
import { UpdateSenbakuroDto } from './dto/updateSenbakuro.dto';

@Injectable()
export class SenbakuroService {
  constructor(
    @InjectRepository(Senbakuro)
    private senbakuroRepository: Repository<Senbakuro>,
  ) {}

  async createSenbakuro(senbakuro: CreateSenbakuroDto): Promise<Senbakuro> {
    const newSenbakuro = this.senbakuroRepository.create(senbakuro);
    return await this.senbakuroRepository.save(newSenbakuro);
  }

  async findAll(): Promise<Senbakuro[]> {
    return this.senbakuroRepository.find();
  }

  async findOne(id: number): Promise<Senbakuro> {
    const senbakuro = await this.senbakuroRepository.findOne({where: { id }});
    if (!senbakuro) {
      throw new NotFoundException('not found');
    }
    return senbakuro;
  }

  async update(id: number, updateSenbakuroDto: UpdateSenbakuroDto): Promise<Senbakuro> {
    const senbakuro = await this.findOne(id);
    if (!senbakuro) {
      throw new NotFoundException('not found');
    }
    Object.assign(senbakuro, updateSenbakuroDto);
    return this.senbakuroRepository.save(senbakuro);
  }

  async remove(id: number): Promise<void> {
    const result = await this.senbakuroRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`senbakuro with ID "${id}" not found.`);
    }
  }
}

