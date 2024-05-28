import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GBAllGuideBookService } from './GBAllGuideBook.service';
import { GBAllGuideBookController } from './GBAllGuideBook.controller';
import { GBAllGuideBook } from './entities/GBAllGuideBook.entity';


@Module({
  imports: [TypeOrmModule.forFeature([GBAllGuideBook])],
  controllers: [GBAllGuideBookController],
  providers: [GBAllGuideBookService]
})
export class GBAllGuideBookModule { }