import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { authUsersService } from './authUsers.service';
import { authUsersController } from './authUsers.controller';
import { authUsers } from './entities/authUsers.entity';


@Module({
  imports: [TypeOrmModule.forFeature([authUsers])],
  controllers: [authUsersController],
  providers: [authUsersService]
})
export class authUsersModule { }