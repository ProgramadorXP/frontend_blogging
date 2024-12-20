export type Filters = {
  active: boolean;
  withReward: boolean;
  popular: boolean;
  week: boolean;
  month: boolean;
}[];

export type Question = {
  id: number;
  title: string;
  answers: number;
  views: string;
  tags: string[];
}[];

export type UserRegistationForm = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  profile_image?: string;
};

export type UserLoginForm = Pick<UserRegistationForm, "username" | "password">;