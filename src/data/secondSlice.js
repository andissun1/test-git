import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const secondSlice = createSlice({
  name: 'secondSlice',
  initialState,
  reducers: {
    counter: () => {},
  },
});

export const { reducer, actions } = secondSlice;
