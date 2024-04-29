import { IsNumber, IsEmail, IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsNumber()
  readonly id?: number;

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsDate()
  readonly createdAt?: Date;

  @IsOptional()
  @IsDate()
  readonly updatedAt?: Date;

  @IsOptional()
  @IsDate()
  readonly deletedAt?: Date;

  // 업데이트할 때는 모든 필드가 선택적이 될 수 있으므로 @IsOptional() 데코레이터를 사용합니다.
  // 추가적으로 업데이트 가능한 필드가 있다면 여기에 정의할 수 있습니다.
}