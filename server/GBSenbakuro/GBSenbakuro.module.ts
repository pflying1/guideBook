import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GBSenbakuroService } from './GBSenbakuro.service';
import { GBSenbakuroController } from './GBSenbakuro.controller';
import { GBSenbakuro } from './entities/GBSenbakuro.entity';


@Module({
  imports: [TypeOrmModule.forFeature([GBSenbakuro])],
  controllers: [GBSenbakuroController],
  providers: [GBSenbakuroService]
})
export class GBSenbakuroModule { }