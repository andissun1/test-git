import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttons: new Array(9).fill(null),
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

const userActionsSlice = createSlice({
  name: 'userActions',
  initialState,
  reducers: {
    setCurrentPlayer: (state, action) => {
      state.currentPlayer = action.payload;
    },
    setIsGameEnded: (state, action) => {
      state.isGameEnded = action.payload;
    },
    setIsDraw: (state, action) => {
      state.isDraw = action.payload;
    },
    setButtons: (state, action) => {
      state.buttons = action.payload;
    },
    resetGame: (state) => {
      return initialState;
    },
  },
});

export const { reducer, actions } = userActionsSlice;

export const store = configureStore({
  reducer: reducer,
});
