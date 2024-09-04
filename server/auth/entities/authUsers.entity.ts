import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class authUsers {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  google_id!: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  first_name?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  last_name?: string;

  @Column({ type: 'text', nullable: true })
  profile_picture?: string;

  @Column({ type: 'text', nullable: true })
  access_token?: string;

  @Column({ type: 'text', nullable: true })
  refresh_token?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor(
    google_id: string,
    email: string,
    first_name?: string,
    last_name?: string,
    profile_picture?: string,
    access_token?: string,
    refresh_token?: string
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
