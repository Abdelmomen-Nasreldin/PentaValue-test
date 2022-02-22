import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { loading: false},
  reducers: {
    showNotification(state, action) {
        state.loading = action.payload.loading
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;