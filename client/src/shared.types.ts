export type reducerProps = {
  authReducer: authReducerProps;
};

export type userDataProps = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  userType: string;
  createdAt: string;
};

export type authReducerProps = {
  userData: userDataProps;
  isLoggedIn: boolean;
  message: string;
  isLoading: boolean;
};

export type CartDataItemsProps = {
  _id: string;
  createdBy: string;
  author: string;
  title: string;
  language: string;
  level: string;
  price: number;
  description: string;
  videoUrl: string;
  thumbnail: string;
  createdAt: string;
}[];
