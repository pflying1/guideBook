# 공식 Node.js 20 이미지를 기반으로 합니다.
FROM node:20

# 작업 디렉토리를 /app으로 설정합니다.
WORKDIR /app

# package.json과 package-lock.json 파일을 작업 디렉토리로 복사합니다.
COPY package*.json ./

# Node.js 종속성을 설치합니다. 여기에는 개발 종속성도 포함됩니다.
RUN npm install

# 빌드된 애플리케이션 소스 코드를 작업 디렉토리로 복사합니다.
COPY . .

# 애플리케이션이 8080 포트에서 실행될 것임을 알립니다.
EXPOSE 8080

# 애플리케이션을 실행합니다.
CMD [ "npm", "start" ]
