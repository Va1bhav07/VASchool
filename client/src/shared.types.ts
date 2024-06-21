export type UserDataProps = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  userType: string;
  createdAt: string;
};

//  Reducers
// export type AuthReducerProps = {
//   userData: UserDataProps;
//   isLoggedIn: boolean;
//   message: string;
//   isLoading: boolean;
// };

// export type CourseReducerProps = {
//   allCourses: CourseDetailsProps[];
//   myCourses: CourseDetailsProps[];
//   instructorCourses: CourseDetailsProps[];
//   courseDetails: CourseDetailsProps;
//   newCoursesAdded: CourseDetailsProps[];
//   isLoading: boolean;
// };

export type CourseDetailsProps = {
  _id: string;
  createdBy: string;
  author: string;
  title: string;
  language: string;
  level: string;
  price: 456;
  description: string;
  videoUrl: string;
  thumbnail: string;
  createdAt: string;
};

export type CartDataItemProps = {
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
};

export type CartDataItemsProps = CartDataItemProps[];
