import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { GBAllGuideBook } from '../../GBAllGuideBook/entities/GBAllGuideBook.entity';
import sanitizeHtml from 'sanitize-html';

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

  @ManyToOne(() => GBAllGuideBook, guideBook => guideBook.senbakuronoes)
  @JoinColumn({ name: "GuideBookAllKey" })
  guideBook: GBAllGuideBook;

  //데이터 살균화?
  @BeforeInsert()
  @BeforeUpdate()
  sanitizeContent() {
    this.SenbakuroContents = sanitizeHtml(this.SenbakuroContents);
    this.SenbakuroTitle = sanitizeHtml(this.SenbakuroTitle);
    this.SenbakuroCategory = sanitizeHtml(this.SenbakuroCategory);
    this.SenbakuroEpisode = sanitizeHtml(this.SenbakuroEpisode);
  }

  constructor(
    SenbakuroKey: number,
    GuideBookAllKey: number,
    SenbakuroTitle: string,
    SenbakuroContents: string,
    SenbakuroCategory: string,
    SenbakuroEpisode: string,
    updatedBy: string,
    createdAt: Date,
    updatedAt: Date,
    guideBook: GBAllGuideBook
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
    this.guideBook = guideBook;
  }
}
