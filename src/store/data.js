import { createSlice } from "@reduxjs/toolkit";
const dataInitialState = [];
const dataSlice = createSlice({
  name: "data",
  initialState: dataInitialState,
  reducers: {
    setData(state,action) {
        const newData= action.payload
        state.push(...newData)
    },
  },
});

export const dataActions = dataSlice.actions

export default dataSlice.reducer
