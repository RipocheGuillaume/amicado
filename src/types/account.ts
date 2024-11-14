export type Account = {
  id: number;
  username: string;
};

export type Login = {
  username: string;
  password: string;
};

export type ResponseLogin = {
  username: string;
  token: string;
};
