import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { authUsers } from './entities/authUsers.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthUsersService {
  constructor(
    @InjectRepository(authUsers)
    private usersRepository: Repository<authUsers>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async createJwtToken(user: authUsers): Promise<string> {
    const payload = { email: user.email, sub: user.id };
    const secret = this.configService.get<string>('JWT_SECRET');
    return this.jwtService.sign(payload, { secret });
  }

  async validateOAuthLogin(
    google_id: string,
    email: string,
    first_name: string,
    last_name: string,
    profile_picture: string,
  ): Promise<authUsers> {
    let user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      user = this.usersRepository.create({
        google_id,
        email,
        first_name,
        last_name,
        profile_picture,
      });
      await this.usersRepository.save(user);
    }

    return user;
  }
}