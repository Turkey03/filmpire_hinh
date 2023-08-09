import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: {},
  sessionId: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.sessionId = localStorage.getItem('session_id');
      localStorage.setItem('accountId', action.payload.id);
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
export const userSelector = (state) => state.user;
