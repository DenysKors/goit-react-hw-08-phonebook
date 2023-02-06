import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authorizationSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authorizationReducer = authorizationSlice.reducer;
