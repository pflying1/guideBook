import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class UpdateGBAllGuideBookDto {

  @IsNotEmpty()
  @IsNumber()
  readonly GuideBookAllKey: number;

  @IsNotEmpty()
  @IsString()
  readonly GuideBookAllTitle: string;

  @IsNotEmpty()
  @IsString()
  readonly GuideBookAllContents: string;

  @IsNotEmpty()
  @IsString()
  readonly updatedBy: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;

  // 추가적으로 필요한 필드가 있다면 여기에 정의할 수 있습니다.

  constructor(
    GuideBookAllKey: number,
    GuideBookAllTitle: string,
    GuideBookAllContents: string,
    updatedBy: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.GuideBookAllKey = GuideBookAllKey;
    this.GuideBookAllTitle = GuideBookAllTitle;
    this.GuideBookAllContents = GuideBookAllContents;
    this.updatedBy = updatedBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}