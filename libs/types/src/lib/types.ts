export interface IFormValues {
  'User Name': string;
  'Email Address': string;
  Password: string;
  'Confirm Password': string;
}

export interface Blog {
  id: string;
  title: string;
  desc: string;
  imgUrl?: string;
  authorId?: string;
  tags?: string[];
  viewCount?: number;
  likeCount?: number;
  createdAt?: string;
  updatedAt?: string;
}
