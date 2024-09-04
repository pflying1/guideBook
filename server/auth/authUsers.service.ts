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
    access_token: string,  // 추가된 access_token
    refresh_token: string  // 추가된 refresh_token
  ): Promise<authUsers> {
    let user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      // 유저가 없을 경우 새로 생성
      user = this.usersRepository.create({
        google_id,
        email,
        first_name,
        last_name,
        profile_picture,
        access_token,   // access_token 저장
        refresh_token,  // refresh_token 저장
      });
    } else {
      // 유저가 있을 경우 access_token 및 refresh_token 업데이트
      user.access_token = access_token;
      user.refresh_token = refresh_token;
    }

    await this.usersRepository.save(user);

    return user;
  }
}