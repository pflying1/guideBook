import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { join } from 'path';
// import { Servnumber | stringcModule } from '@nestjs/serve-static';

// user 모듈
import { UserModule } from './server/user/user.module';
import { User } from './server/user/entities/user.entity';
// GBAllGuideBook 모듈
import { GBAllGuideBookModule } from './server/GBAllGuideBook/GBAllGuideBook.module';
import { GBAllGuideBook } from './server/GBAllGuideBook/entities/GBAllGuideBook.entity';
// GBSenbakuro 모듈
import { GBSenbakuroModule } from './server/GBSenbakuro/GBSenbakuro.module';
import { GBSenbakuro } from './server/GBSenbakuro/entities/GBSenbakuro.entity';

// authUsers 모듈
import { AuthUsersModule } from './server/auth/authUsers.module';
import { authUsers } from './server/auth/entities/authUsers.entity';

// authGuard
import { JwtAuthGuard } from './server/auth/jwtAuth.guard';
import { MixinAuthGuard } from './server/auth/mixinAuth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
// MixinAuthGuard를 사용하여 JwtAuthGuard를 확장한 새로운 가드 생성
const JwtAuthGuardWithMixin = MixinAuthGuard(JwtAuthGuard);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, UserModule, GBAllGuideBookModule, GBSenbakuroModule, AuthUsersModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('NAS_DB_HOST'),
        port: configService.get<number>('NAS_DB_PORT'),
        username: configService.get('NAS_DB_USERNAME'),
        password: configService.get('NAS_DB_PASSWORD'),
        database: configService.get('NAS_DB_NAME'),
        synchronize: false,
        entities: [User, GBAllGuideBook, GBSenbakuro],
      }),
    }),
    AuthUsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}