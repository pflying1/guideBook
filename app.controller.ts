import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getIndex(@Res() res: Response): void {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  }

  @Get('test')
  getText(): string[] {
    return this.appService.getTest();
  }
}
