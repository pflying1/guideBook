import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { authUsersService } from './authUsers.service';
import { createAuthUsersDto } from './dto/createAuthUsers.dto';
import { updateAuthUsersDto } from './dto/updateAuthUsers.dto';

@Controller('auth/AuthUsers')
export class authUsersController {
  constructor(private readonly AuthUsersService: authUsersService) {}

  @Post()
  create(@Body() createAuthUsersDto: createAuthUsersDto) {
    return this.AuthUsersService.createAuthUsers(createAuthUsersDto);
  }

  @Get()
  findAll() {
    return this.AuthUsersService.findAll();
  }
}