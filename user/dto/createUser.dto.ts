import { IsNotEmpty, IsNumber, IsEmail, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly deletedAt: Date;

  // 추가적으로 필요한 필드가 있다면 여기에 정의할 수 있습니다.


  constructor(id: number, name: string, email: string, Date: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = Date;
    this.updatedAt = Date;
    this.deletedAt = Date;
  }
}
