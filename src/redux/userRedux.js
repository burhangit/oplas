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
   
    loginSuccess: (state, action) => {
      state.isFetching = true;
      state.logoutMessage = null;
      state.currentUser = action.payload;
    },

  },
});

export const {
  loginSuccess,
} = userSlice.actions;
export default userSlice.reducer;
