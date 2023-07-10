export interface Pagination<T> {
  page: number;
  pageSize: number;
  total: number;
  results: T[];
}

export interface Category {
  id: number;
  code: string;
  name: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface Blog {
  id?: string;
  title: string;
  desc: string;
  imgUrl?: string;
  authorId?: string;
  tags?: string[];
  viewCount?: number;
  likeCount?: number;
  createdAt?: string;
  updatedAt?: string;
  date?: string;
  href?: string;
}
