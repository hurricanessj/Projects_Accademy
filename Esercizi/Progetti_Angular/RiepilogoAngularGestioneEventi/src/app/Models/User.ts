export interface User{
  id: number | string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  online: boolean;
}