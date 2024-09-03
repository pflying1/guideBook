export interface AuthState {
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isAuthenticated: boolean;
  user: any | null;
}

export interface DecodedToken {
  userId: string;
  exp: number;
}