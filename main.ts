import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import * as fs from 'fs/promises'; // fs/promises를 사용하여 비동기적으로 파일을 확인합니다.
import { type Request, type Response, type NextFunction } from 'express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // 정적 파일 폴더 경로 설정
  app.use(express.static(join(__dirname, 'dist')));

  // 이미지 파일이 존재하는지 확인하는 미들웨어
  app.use('/asset', async (req: Request, res: Response, next: NextFunction) => {
    const filePath = join(__dirname, 'src', 'asset', req.path);
    try {
      await fs.access(filePath);
      express.static(join(__dirname, 'src', 'asset'))(req, res, next);
    } catch (err) {
      res.status(404).send('File not found');
    }
  });

  // 특정 경로(예: /api)에 대한 요청을 제외한 모든 요청을 index.html로 리다이렉트
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith('/api')) {
      next();
    } else {
      res.sendFile(join(__dirname, 'dist', 'index.html'));
    }
  });

  // CORS 설정
  app.enableCors();

  await app.listen(8080);
}

bootstrap().catch((err) => {
  console.error(err);
});
