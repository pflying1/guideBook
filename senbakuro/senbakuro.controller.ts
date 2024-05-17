import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SenbakuroService } from './senbakuro.service';
import { CreateSenbakuroDto } from './dto/createSenbakuro.dto';
import { UpdateSenbakuroDto } from './dto/updateSenbakuro.dto';

@Controller('senbakuro')
export class SenbakuroController {
  constructor(private readonly senbakuroService: SenbakuroService) {}

  @Post()
  create(@Body() createSenbakuroDto: CreateSenbakuroDto) {
    return this.senbakuroService.CreateSenbakuro(createSenbakuroDto);
  }

  @Get()
  findAll() {
    return this.senbakuroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.senbakuroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSenbakuroDto: UpdateSenbakuroDto) {
    return this.senbakuroService.update(+id, updateSenbakuroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.senbakuroService.remove(+id);
  }
}
