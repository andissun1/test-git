import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttons: new Array(9).fill(null),
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

// const appReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SET_CURRENT_PLAYER': {
//       return { ...state, currentPlayer: payload };
//     }

//     case 'SET_IS_GAME_ENDED': {
//       return { ...state, isGameEnded: payload };
//     }

//     case 'SET_IS_DRAW': {
//       return { ...state, isDraw: payload };
//     }

//     case 'SET_BUTTONS': {
//       return { ...state, buttons: payload };
//     }

//     case 'RESET_GAME': {
//       return initialState;
//     }

//     default:
//       return state;
//   }
// };

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
