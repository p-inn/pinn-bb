export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData extends SignInData {
  name?: string;
  passwordCheck?: string;
  nickName?: string;
  tel?: string;
}

export interface User {
    id: string;
    email: string;
}