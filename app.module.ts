import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { join } from 'path';
// import { Servnumber | stringcModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // 환경 변수를 로드하기 위해 ConfigModule 추가
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, UserModule], // ConfigModule을 imports에 추가
      inject: [ConfigService], // ConfigService를 TypeOrmModule 설정에 주입
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('NAS_DB_HOST'),
        port: configService.get<number>('NAS_DB_PORT'),
        username: configService.get('NAS_DB_USERNAME'),
        password: configService.get('NAS_DB_PASSWORD'),
        database: configService.get('NAS_DB_NAME'),
        synchronize: false,
        entities: [User],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
