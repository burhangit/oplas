import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: {
    questionData: null,
  },
  reducers: {
    questionGet: (state, action) => {
      state.questionData = action.payload;
    },
 

  },
});

export const {
    questionGet,
    
 
} = answerSlice.actions;
export default answerSlice.reducer;
