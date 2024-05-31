import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class UpdateGBSenbakuroDto {

  @IsNotEmpty()
  @IsNumber()
  readonly SenbakuroKey: number;

  @IsNotEmpty()
  @IsNumber()
  readonly GuideBookAllKey: number;

  @IsNotEmpty()
  @IsString()
  readonly SenbakuroTitle: string;

  @IsNotEmpty()
  @IsString()
  readonly SenbakuroContents: string;

  @IsNotEmpty()
  @IsString()
  readonly SenbakuroCategory: string;

  @IsString()
  readonly SenbakuroEpisode: string;

  @IsNotEmpty()
  @IsString()
  readonly updatedBy: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;

  constructor(
    SenbakuroKey: number,
    GuideBookAllKey: number,
    SenbakuroTitle: string,
    SenbakuroContents: string,
    SenbakuroCategory: string,
    SenbakuroEpisode: string,
    updatedBy: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.SenbakuroKey = SenbakuroKey;
    this.GuideBookAllKey = GuideBookAllKey;
    this.SenbakuroTitle = SenbakuroTitle;
    this.SenbakuroContents = SenbakuroContents;
    this.SenbakuroCategory = SenbakuroCategory;
    this.SenbakuroEpisode = SenbakuroEpisode;
    this.updatedBy = updatedBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
