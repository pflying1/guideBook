import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SenbakuroService } from './senbakuro.service';
import { SenbakuroController } from './senbakuro.controller';
import { Senbakuro } from './entities/senbakuro.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Senbakuro])],
  controllers: [SenbakuroController],
  providers: [SenbakuroService]
})
export class SenbakuroModule { }