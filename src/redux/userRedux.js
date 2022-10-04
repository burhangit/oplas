import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    useEmail: null,
    logoutMessage: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.logoutMessage = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = true;
      state.logoutMessage = null;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.logoutMessage = null;
      state.error = true;
    },
    logoutStart: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
      state.logoutMessage = "You've been logged out successfully!";
    },
    updateUserStart: (state) => {
      state.isFetching = true;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = true;
      state.currentUser = action.payload;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loginRegister: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = true;
      state.logoutMessage = null;
    },
    addLogin: (state, action) => {
      state.isFetching = true;
      state.logoutMessage = null;
      state.currentUser = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  loginRegister,
  addLogin,
} = userSlice.actions;
export default userSlice.reducer;
