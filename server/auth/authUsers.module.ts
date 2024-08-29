import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthUsersService } from './authUsers.service';
import { AuthController } from './authUsers.controller';
import { authUsers } from './entities/authUsers.entity';
import { JwtAuthGuard } from './jwtAuth.guard';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([authUsers]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
    ConfigModule,
  ],
  providers: [AuthUsersService, JwtAuthGuard, GoogleStrategy],
  controllers: [AuthController],
  exports: [AuthUsersService],
})
export class AuthUsersModule {}