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
      callbackURL: 'http://localhost:8080/api/auth/google/callback', // 리디렉션 URI 확인
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
    const user = await this.authService.validateOAuthLogin(
      google_id,
      emails[0].value,
      name.givenName,
      name.familyName,
      photos[0].value,
    );
    const jwtToken = await this.authService.createJwtToken(user);
    done(null, { user, jwtToken });
  }
}