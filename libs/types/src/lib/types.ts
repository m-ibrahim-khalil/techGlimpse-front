export interface ISignUpFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInFormInput {
  username: string;
  password: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  imgUrl?: string;
  authorId?: string;
  tags?: string[];
  viewCount?: number;
  likeCount?: number;
  createdAt: string;
  updatedAt: string;
}
