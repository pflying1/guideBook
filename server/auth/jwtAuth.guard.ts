import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // 인증을 요구하지 않는 경로들
    const excludedRoutes = [
      '/login',
      '/api/auth/google/login',
      '/api/auth/google/callback',
    ];

    const requestPath = request.url.split('?')[0];

    // 인증을 요구하지 않는 경로 처리
    if (excludedRoutes.includes(requestPath) || requestPath.startsWith('/api/')) {
      return true;
    }

    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded;
      return true;
    } catch (error) {
      console.error('JWT verification failed:', error instanceof Error ? error.message : error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
``
