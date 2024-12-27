import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  isMenuOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    switchSideNav: (state) => {
      console.log("trigger")
      state.isMenuOpen = !state.isMenuOpen
    }
  },
});


export const { login, logout, switchSideNav } = authSlice.actions;
export default authSlice.reducer;
