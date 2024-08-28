import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { authUsers } from './entities/authUsers.entity';
import { createAuthUsersDto } from './dto/createAuthUsers.dto';
import { updateAuthUsersDto } from './dto/updateAuthUsers.dto';

@Injectable()
export class authUsersService {
  constructor(
    @InjectRepository(authUsers)
    private authUsersRepository: Repository<authUsers>,
  ) {}

  async createAuthUsers(authUsers: createAuthUsersDto): Promise<authUsers> {
    const newAuthUsers = this.authUsersRepository.create(authUsers);
    return await this.authUsersRepository.save(newAuthUsers);
  }

  async findAll(): Promise<authUsers[]> {
    return this.authUsersRepository.find();
  }
}