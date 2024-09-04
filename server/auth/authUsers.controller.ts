import { Controller, Get, Req, Res, UseGuards, Logger } from '@nestjs/common';
import { AuthUsersService } from './authUsers.service';
import { GoogleAuthGuard } from './googleAuth.guard';
import { Request, Response } from 'express';

@Controller('api/auth/google')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authUsersService: AuthUsersService) {}

  @Get('login')
  @UseGuards(GoogleAuthGuard)
  async googleLogin(@Req() req: Request, @Res() res: Response): Promise<void> {
    this.logger.log('Google OAuth 로그인 시도');
    // GoogleAuthGuard가 인증 절차를 수행하며, 이 단계에서는 별도의 응답이 필요하지 않음
  }

  @Get('callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    const { user, jwtToken } = req.user as { user: any; jwtToken: string };

    this.logger.log(`Google OAuth 로그인 성공: 사용자 ${user.email}`);
    
    // 로그인 성공 시, 클라이언트로 리다이렉션하며 JWT 토큰 전달
    res.redirect(`http://localhost:8080/?token=${jwtToken}`);
  }
}
