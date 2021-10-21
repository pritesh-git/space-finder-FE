export interface User {
  userName: string;
  email: string;
}

export interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessfull: boolean;
}

export interface CustomInput {
  target: HTMLInputElement;
}

export interface UserAttribute {
  Name: string;
  Value: string;
}
