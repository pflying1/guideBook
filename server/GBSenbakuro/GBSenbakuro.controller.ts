import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GBSenbakuroService } from './GBSenbakuro.service';
import { CreateGBSenbakuroDto } from './dto/createGBSenbakuro.dto';
import { UpdateGBSenbakuroDto } from './dto/updateGBSenbakuro.dto';

@Controller('GBSenbakuro')
export class GBSenbakuroController {
  constructor(private readonly GBSenbakuroService: GBSenbakuroService) {}

  @Post()
  create(@Body() createGBSenbakuroDto: CreateGBSenbakuroDto) {
    return this.GBSenbakuroService.createGBSenbakuro(createGBSenbakuroDto);
  }

  @Get()
  findAll() {
    return this.GBSenbakuroService.findAll();
  }

  @Get(':GBSenbakuroKey')
  findOne(@Param('GBSenbakuroKey') GBSenbakuroKey: number) {
    return this.GBSenbakuroService.findOne(+GBSenbakuroKey);
  }

  @Patch(':GBSenbakuroKey')
  update(@Param('GBSenbakuroKey') GBSenbakuroKey: number, @Body() updateGBSenbakuroDto: UpdateGBSenbakuroDto) {
    return this.GBSenbakuroService.update(+GBSenbakuroKey, updateGBSenbakuroDto);
  }

  @Delete(':GBSenbakuroKey')
  remove(@Param('GBSenbakuroKey') GBSenbakuroKey: number) {
    return this.GBSenbakuroService.remove(+GBSenbakuroKey);
  }
}
