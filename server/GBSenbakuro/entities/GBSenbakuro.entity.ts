import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class GBSenbakuro {
  @PrimaryGeneratedColumn()
  SenbakuroKey: number;

  @Column()
  GuideBookAllKey: number;

  @Column({ length: 300 })
  SenbakuroTitle: string;

  @Column('longtext')
  SenbakuroContents: string;

  @Column({ length: 50 })
  SenbakuroCategory: string;

  @Column({ length: 20, nullable: true })
  SenbakuroEpisode: string;

  @Column({ length: 11 })
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

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
