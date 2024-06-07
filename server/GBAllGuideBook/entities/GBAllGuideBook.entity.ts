import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn  } from 'typeorm';
import { GBSenbakuro } from '../../GBSenbakuro/entities/GBSenbakuro.entity';

@Entity()
export class GBAllGuideBook {
  @PrimaryGeneratedColumn()
  GuideBookAllKey!: number;

  @Column({ length: 300 })
  GuideBookAllTitle!: string;

  @Column('longtext')
  GuideBookAllContents!: string;

  @Column({ length: 11 })
  updatedBy!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => GBSenbakuro, senbakuro => senbakuro.guideBook)
  @JoinColumn({ name: 'GuideBookAllKey', referencedColumnName: 'GuideBookAllKey' }) // JOIN 컬럼과 참조되는 컬럼을 수동으로 지정
  senbakuronoes!: GBSenbakuro[];

  constructor(
    GuideBookAllKey: number,
    GuideBookAllTitle: string,
    GuideBookAllContents: string,
    updatedBy: string,
    createdAt: Date,
    updatedAt: Date,
    senbakuronoes: GBSenbakuro[]
  ) {
    this.GuideBookAllKey = GuideBookAllKey;
    this.GuideBookAllTitle = GuideBookAllTitle;
    this.GuideBookAllContents = GuideBookAllContents;
    this.updatedBy = updatedBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.senbakuronoes = senbakuronoes;
  }
}
