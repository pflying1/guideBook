import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GBAllSenbakuroService } from './GBAllSenbakuro.service';
import { CreateGBAllSenbakuroDto } from './dto/createGBAllSenbakuro.dto';
import { UpdateGBAllSenbakuroDto } from './dto/updateGBAllSenbakuro.dto';

@Controller('GBAllSenbakuro')
export class GBAllSenbakuroController {
  constructor(private readonly GBAllSenbakuroService: GBAllSenbakuroService) {}

  @Post()
  create(@Body() createGBAllSenbakuroDto: CreateGBAllSenbakuroDto) {
    return this.GBAllSenbakuroService.createGBAllSenbakuro(createGBAllSenbakuroDto);
  }

  @Get()
  findAll() {
    return this.GBAllSenbakuroService.findAll();
  }

  @Get(':GuideBookAllKey')
  findOne(@Param('GuideBookAllKey') GuideBookAllKey: number) {
    return this.GBAllSenbakuroService.findOne(+GuideBookAllKey);
  }

  @Patch(':GuideBookAllKey')
  update(@Param('GuideBookAllKey') GuideBookAllKey: number, @Body() updateGBAllSenbakuroDto: UpdateGBAllSenbakuroDto) {
    return this.GBAllSenbakuroService.update(+GuideBookAllKey, updateGBAllSenbakuroDto);
  }

  @Delete(':GuideBookAllKey')
  remove(@Param('GuideBookAllKey') GuideBookAllKey: number) {
    return this.GBAllSenbakuroService.remove(+GuideBookAllKey);
  }
}
