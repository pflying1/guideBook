import { IsNotEmpty, IsNumber, IsEmail, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateSenbakuroDto {

  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;


  // 추가적으로 필요한 필드가 있다면 여기에 정의할 수 있습니다.


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

  }
}
