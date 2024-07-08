import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RootState } from '../index';

interface UserState {
  token: string;
}

const initialState: UserState = {
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logOut: () => initialState
  }
});

export const { setToken, logOut } = userSlice.actions;
export const selectUser = (state: RootState): string => state.user.token;
export default userSlice.reducer;
