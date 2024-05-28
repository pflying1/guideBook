import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Long } from 'typeorm';

@Entity()
export class GBAllSenbakuro {
  @PrimaryGeneratedColumn()
  GuideBookAllKey: number;

  @Column({ length: 300 })
  GuideBookAllTitle: string;

  @Column('longtext')
  GuideBookAllContents: string;

  @Column({ length: 11 })
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

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