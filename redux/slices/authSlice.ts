import { LoginModel } from "@interfaces/auth/login";
import { RegisterModel } from "@interfaces/auth/register";
import { LoginAdmin, RegisterUser, UpdatePassword } from "@lib/authService";
import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export const loginAdminAsync = createAsyncThunk(
  "auth/login/admin",
  async ({ val, password }: { val: string; password: string }) => {
    const response = await LoginAdmin(val, password);
    return response;
  }
);

export const updatePasswordAsync = createAsyncThunk(
  "auth/update-password",
  async ({ password }: { password: string }) => {
    const response = await UpdatePassword(password);
    return response;
  }
);

export const registerAsync = createAsyncThunk(
  "auth/register",
  async ({ register }: { register: RegisterModel }) => {
    const response = await RegisterUser(register);
    return response;
  }
);

interface AuthState {
  loading: boolean;
  data: LoginModel | null;
  isAuthenticated: boolean;
  showPassword: boolean;
  email: string;
  password: string;
  role: string;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  data: null,
  loading: false,
  isAuthenticated: false,
  showPassword: false,
  email: "",
  password: "",
  role: "1",
  token: null,
  error: null,
};

const handleAuthAsyncThunk = <Returned, ThunkArg>(
  builder: any,
  asyncThunk: AsyncThunk<Returned, ThunkArg, {}>
) => {
  builder
    .addCase(asyncThunk.pending, (state: AuthState) => {
      state.loading = true;
    })
    .addCase(asyncThunk.fulfilled, (state: AuthState) => {
      state.loading = false;
    })
    .addCase(asyncThunk.rejected, (state: AuthState) => {
      state.loading = false;
    });
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setShowPassword(state, action: PayloadAction<boolean>) {
      state.showPassword = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    clearToken(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    handleAuthAsyncThunk(builder, registerAsync);
  },
});

export const { setEmail, setLoading, setPassword, setShowPassword, setError } =
  authSlice.actions;
export default authSlice.reducer;
