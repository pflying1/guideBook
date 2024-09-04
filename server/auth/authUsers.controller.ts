import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthUsersService } from './authUsers.service';
import { GoogleAuthGuard } from './googleAuth.guard';
import { Request, Response } from 'express';
import { JwtAuthGuard } from './jwtAuth.guard';
import { MixinAuthGuard } from './mixinAuth.guard';

// MixinAuthGuard를 사용하여 JwtAuthGuard를 확장한 새로운 가드 생성
const JwtAuthGuardWithMixin = MixinAuthGuard(JwtAuthGuard);

@Controller('api/auth/google')
export class AuthController {
  constructor(private readonly authUsersService: AuthUsersService) {}

  @Get('login')
  @UseGuards(GoogleAuthGuard)
  async googleLogin(@Req() req: Request) {

  }

  @Get('callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    const { user, jwtToken } = req.user as { user: any; jwtToken: string };

    // JWT 토큰을 클라이언트에 전달하거나 특정 페이지로 리디렉션
    res.redirect(`http://localhost:8080/?token=${jwtToken}`);
  }
}

@Controller('api/users')
export class UserController {
  @UseGuards(JwtAuthGuardWithMixin)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}