import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../interface';

export interface AuthState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  user: {name: '', email: '', token: ''},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logoutAction: state => {
      state.isAuth = false;
      state.user = initialState.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const {loginAction, logoutAction} = authSlice.actions;

export default authSlice.reducer;
