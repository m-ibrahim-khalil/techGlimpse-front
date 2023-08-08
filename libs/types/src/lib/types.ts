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

export interface IUpdatePasswordFormInput {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  imgUrl?: string;
  coverImage?: File | null;
  author?: string;
  authorId?: string;
  tags?: string[];
  viewCount?: number;
  likeCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  imgUrl?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  gender?: 'Male' | 'Female' | 'Other';
  bio?: string;
  age?: number;
  createdAt: string;
  updatedAt: string;
}

// export interface IBlogFormInput {
//   coverImage?: File | null;
//   title: string;
//   description: string;
//   imgUrl?: string;
//   tags?: string[];
// }

export interface IBlogListResponse {
  totalItems: number;
  payload: Blog[];
  totalPages: number;
  currentPage: number;
}

export interface GenericResponse<Data> {
  status: string;
  message: Data;
}
