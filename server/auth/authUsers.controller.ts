import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthUsersService } from './authUsers.service';
import { GoogleAuthGuard } from './google-auth.guard'; // GoogleAuthGuard 임포트
import { Request, Response } from 'express';

@Controller('api/auth/google')
export class AuthController {
  constructor(private readonly authUsersService: AuthUsersService) {}

  @Get('login')
  @UseGuards(GoogleAuthGuard)
  async googleLogin(@Req() req: Request) {
    // Google 인증을 위한 엔드포인트
  }

  @Get('callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    const { user, jwtToken } = req.user as { user: AuthUsersService; jwtToken: string };

    // 사용자에게 토큰을 전달하거나, 애플리케이션의 특정 페이지로 리디렉션
    res.redirect(`http://localhost:3000/?token=${jwtToken}`);
  }
}