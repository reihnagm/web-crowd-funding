interface AuthResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    id: string;
    enabled: boolean;
    email: string;
    role: string;
    verify: boolean;
    token: string;
  };
}

interface AuthDataResponse {
  id: string;
  enabled: boolean;
  email: string;
  role: string;
  verify: boolean;
  token: string;
}
