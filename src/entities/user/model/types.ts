export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface UserState {
  data: User | null;
  isLoading: boolean;
  error: string | null;
}
