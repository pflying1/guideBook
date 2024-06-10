import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GBAllGuideBookService } from './GBAllGuideBook.service';
import { GBAllGuideBook } from './entities/GBAllGuideBook.entity';
import { CreateGBAllGuideBookDto } from './dto/createGBAllGuideBook.dto';
import { UpdateGBAllGuideBookDto } from './dto/updateGBAllGuideBook.dto';

@Controller('GBAllGuideBook')
export class GBAllGuideBookController {
  constructor(private readonly GBAllGuideBookService: GBAllGuideBookService) {}
  
  @Get('with-senbakuro')
  findAllWithSenbakuro(): Promise<GBAllGuideBook[]> {
    return this.GBAllGuideBookService.findAllWithSenbakuro();
  }

  @Post()
  create(@Body() createGBAllGuideBookDto: CreateGBAllGuideBookDto) {
    return this.GBAllGuideBookService.createGBAllGuideBook(createGBAllGuideBookDto);
  }

  @Get()
  findAll() {
    return this.GBAllGuideBookService.findAll();
  }

  /* test */
/*   @Get(':GuideBookAllKey')
  findOne(@Param('GuideBookAllKey') GuideBookAllKey: number) {
    return this.GBAllGuideBookService.findOne(+GuideBookAllKey);
  }

  @Patch(':GuideBookAllKey')
  update(@Param('GuideBookAllKey') GuideBookAllKey: number, @Body() updateGBAllGuideBookDto: UpdateGBAllGuideBookDto) {
    return this.GBAllGuideBookService.update(+GuideBookAllKey, updateGBAllGuideBookDto);
  }

  @Delete(':GuideBookAllKey')
  remove(@Param('GuideBookAllKey') GuideBookAllKey: number) {
    return this.GBAllGuideBookService.remove(+GuideBookAllKey);
  } */

}
