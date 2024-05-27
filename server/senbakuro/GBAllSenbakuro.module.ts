import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GBAllSenbakuroService } from './GBAllSenbakuro.service';
import { GBAllSenbakuroController } from './GBAllSenbakuro.controller';
import { GBAllSenbakuro } from './entities/GBAllSenbakuro.entity';


@Module({
  imports: [TypeOrmModule.forFeature([GBAllSenbakuro])],
  controllers: [GBAllSenbakuroController],
  providers: [GBAllSenbakuroService]
})
export class GBAllSenbakuroModule { }