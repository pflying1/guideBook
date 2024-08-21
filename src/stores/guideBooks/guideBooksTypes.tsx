export interface GuideBookInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface SenbakuronoDataInfo {
  SenbakuroKey: number;
  GuideBookAllKey: number;
  SenbakuroTitle: string;
  SenbakuroContents: string;
  SenbakuroContentsOrder: string;
  SenbakuroCategory: string;
  SenbakuroEpisode: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface GuideBookDataInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  senbakuronoes: SenbakuronoDataInfo[];
}

export interface GuideBooksState {
  data: GuideBookDataInfo[];
  error: string | null;
}