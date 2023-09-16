import {createSlice} from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'All',
  initialState: {
    data: {},
  },
  reducers: {
    userData(state, action) {
      state.data = action.payload;
    },
  },
});

export default mainSlice.reducer;

export const {userData} = mainSlice.actions;
