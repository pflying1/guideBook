export interface DecodedToken {
  email: string;
  name: string;
  exp: number;
  sub: string;
}

export interface AuthState {
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isAuthenticated: boolean;
  user: DecodedToken | null;
}