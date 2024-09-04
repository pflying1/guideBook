import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { AuthUsersService } from './authUsers.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthUsersService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/api/auth/google/callback', // 리디렉션 URI
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id: google_id, name, emails, photos } = profile;

    // 유저 정보를 데이터베이스에 저장하거나 조회하고, access_token 및 refresh_token도 저장
    const user = await this.authService.validateOAuthLogin(
      google_id,
      emails[0].value,
      name.givenName,
      name.familyName,
      photos[0].value,
      accessToken,    // access_token 전달
      refreshToken    // refresh_token 전달
    );

    // JWT 토큰 생성
    const jwtToken = await this.authService.createJwtToken(user);

    // 인증 완료 및 토큰 반환
    done(null, { user, jwtToken });
  }
}
