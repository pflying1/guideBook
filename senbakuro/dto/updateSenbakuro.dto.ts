import { IsNumber, IsEmail, IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateSenbakuroDto {

  @IsOptional()
  @IsNumber()
  readonly id?: number;

  @IsOptional()
  @IsString()
  readonly name?: string;
}