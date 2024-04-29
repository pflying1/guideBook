import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { User } from './entities/user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('NAS_DB_HOST'),
        port: configService.get<number>('NAS_DB_PORT'),
        username: configService.get<string>('NAS_DB_USER'),
        password: configService.get<string>('NAS_DB_PASSWORD'),
        database: configService.get<string>('NAS_DB_NAME'),
        entities: [User],
        synchronize: false, // 프로덕션에서는 false로 설정
        logging: true,
      }),
    }),
    TypeOrmModule.forFeature([User]), // User 엔티티 등록
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
