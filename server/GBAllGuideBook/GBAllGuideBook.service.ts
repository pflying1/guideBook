import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GBAllGuideBook } from './entities/GBAllGuideBook.entity';
import { CreateGBAllGuideBookDto } from './dto/createGBAllGuideBook.dto'; // CreateGBAllGuideBookDto를 사용하기 위해 import
import { UpdateGBAllGuideBookDto } from './dto/updateGBAllGuideBook.dto';

@Injectable()
export class GBAllGuideBookService {
  constructor(
    @InjectRepository(GBAllGuideBook)
    private GBAllGuideBookRepository: Repository<GBAllGuideBook>,
  ) {}

  async createGBAllGuideBook(GBAllGuideBook: CreateGBAllGuideBookDto): Promise<GBAllGuideBook> {
    const newGBAllGuideBook = this.GBAllGuideBookRepository.create(GBAllGuideBook);
    return await this.GBAllGuideBookRepository.save(newGBAllGuideBook);
  }

  async findAll(): Promise<GBAllGuideBook[]> {
    return this.GBAllGuideBookRepository.find();
  }

  async findOne(id: number): Promise<GBAllGuideBook> {
    const GBAllGuideBook = await this.GBAllGuideBookRepository.findOne({where: { GuideBookAllKey:id }});
    if (!GBAllGuideBook) {
      throw new NotFoundException('not found');
    }
    return GBAllGuideBook;
  }

  async update(id: number, updateGBAllGuideBookDto: UpdateGBAllGuideBookDto): Promise<GBAllGuideBook> {
    const GBAllGuideBook = await this.findOne(id);
    if (!GBAllGuideBook) {
      throw new NotFoundException('not found');
    }
    Object.assign(GBAllGuideBook, updateGBAllGuideBookDto);
    return this.GBAllGuideBookRepository.save(GBAllGuideBook);
  }

  async remove(id: number): Promise<void> {
    const result = await this.GBAllGuideBookRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`GBAllGuideBook with ID "${id}" not found.`);
    }
  }
}  