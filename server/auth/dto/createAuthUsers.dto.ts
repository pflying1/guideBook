import { IsNotEmpty, IsString, IsEmail, IsOptional, IsUrl } from 'class-validator';

export class createAuthUsersDto {
  @IsNotEmpty()
  @IsString()
  readonly google_id: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @IsNotEmpty()
  @IsUrl() 
  readonly profile_picture: string;

  @IsNotEmpty()
  @IsString()
  readonly access_token: string;

  @IsNotEmpty()
  @IsString()
  readonly refresh_token: string;

  constructor(
    google_id: string,
    email: string,
    first_name: string,
    last_name: string,
    profile_picture: string,
    access_token: string,
    refresh_token: string
  ) {
    this.google_id = google_id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.profile_picture = profile_picture;
    this.access_token = access_token;
    this.refresh_token = refresh_token;
  }
}